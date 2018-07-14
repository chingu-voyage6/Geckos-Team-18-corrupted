import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Collection } from '../models/collection.model';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';
import { UserCollection } from '../models/user-collection.model';
import { User } from '../../auth/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  collectionRef: AngularFirestoreCollection<Collection>;
  userCollectionRef: AngularFirestoreCollection<string>;


  constructor(private afs: AngularFirestore, private authService: AuthService) { 
    this.collectionRef = this.afs.collection('collections');
    this.authService.user.subscribe((user: User) => {
      this.userCollectionRef = this.afs.collection(`users/${user.uid}/collections`)
    });
  }

  get collections(): Observable<Collection[]> {
    return this.collectionRef.valueChanges()
  }

  createCollection(collection: Collection) {
    this.collectionRef.add(collection).then((collection) => {
      console.log(collection.id);
      this.addUserCollection(collection.id);
    });

  }

  get userCollections(): Observable<string[]> {
    return this.userCollectionRef.valueChanges();
  }

  private addUserCollection(collectionId: string) {
    this.userCollectionRef.add(collectionId);
  }
}
 