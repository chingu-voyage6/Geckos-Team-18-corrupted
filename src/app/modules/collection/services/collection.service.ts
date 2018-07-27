import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Collection } from '@collection/models/collection.model';
import { Observable } from 'rxjs';
import { AuthService } from '@auth/services/auth.service';
import { Card } from '@collection/models/card.model';
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

  getCollectionById(collectionId): Observable<Collection> {
    return this.afs
      .collection<Collection>('collections', ref =>
        ref.where('id', '==', collectionId)
      )
      .valueChanges()
      .pipe(map((collections: Collection[]) => collections[0]));
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
    return this.afs
      .collection<Collection>('collections')
      .add(collection)
      .then(collection => {
        collection.update({ id: collection.id });
      });
  }

  updateCollection(collection: Collection) {
    return this.afs.doc(`collections/${collection.id}`).update(collection);
  }

  deleteCollection(collectionId: string) {
    return this.afs.doc(`collections/${collectionId}`).delete();
  }

  getCollectionCards(collectionId: string) {
    return this.afs
      .collection<Card>(`collections/${collectionId}/cards`)
      .valueChanges();
  }

  createCollectionCard(collectionId: string, card: Card) {
    return this.afs
      .collection<Card>(`collections/${collectionId}/cards`)
      .add(card)
      .then(card => {
        card.update({ id: card.id });
      });
  }

  updateCollectionCard(collectionId: string, card: Card) {
    return this.afs
      .doc(`collections/${collectionId}/cards/${card.id}`)
      .update(card);
  }

  deleteCollectionCard(collectionId: string, card: Card) {
    return this.afs
      .doc(`collections/${collectionId}/cards/${card.id}`)
      .delete();
  }
}
