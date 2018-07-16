import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Collection } from '../models/collection.model';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';
import { User } from '../../auth/models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  constructor(
    private afs: AngularFirestore,
    private authService: AuthService
  ) {}

  get collections(): Observable<Collection[]> {
    return this.afs
      .collection<Collection>('collections', ref =>
        ref.where('public', '==', true)
      )
      .valueChanges();
  }

  get userCollections(): Observable<Collection[]> {
    return this.afs
      .collection<Collection>('collections', ref => {
        return ref.where('authorId', '==', this.authService.uid);
      })
      .valueChanges();
  }

  createCollection(collection: Collection) {
    collection.authorId = this.authService.uid;
    this.afs
      .collection<Collection>('collections')
      .add(collection)
      .then(collection => {
        this.afs
          .doc(`collections/${collection.id}`)
          .update({ id: collection.id });
      });
  }

  updateCollection(collection: Collection) {
    return this.afs.doc(`collections/${collection.id}`).update(collection);
  }

  deleteCollection(collectionId: string) {
    this.afs.doc(`collections/${collectionId}`).delete();
  }
}
