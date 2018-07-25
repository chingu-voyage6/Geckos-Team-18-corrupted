import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFirestore } from 'angularfire2/firestore';

import { MaterialModule } from '../material/material.module';
import { RoutingModule } from './routing/routing.module';

import { CollectionService } from './services/collection.service';

import { CollectionsComponent } from './components/collections/collections.component';
import { CollectionDetailComponent } from './components/collection-detail/collection-detail.component';
import { SingularCollectionComponent } from './components/singular-collection/singular-collection.component';
import { CreateCollectionComponent } from './components/create-collection/create-collection.component';

@NgModule({
  imports: [CommonModule, RoutingModule, MaterialModule, ReactiveFormsModule],
  declarations: [CollectionsComponent, CollectionDetailComponent, SingularCollectionComponent, CreateCollectionComponent],
  exports: [CollectionsComponent, CollectionDetailComponent, CreateCollectionComponent],
  entryComponents: [CollectionDetailComponent, CreateCollectionComponent],
  providers: [AngularFirestore, CollectionService]
})
export class CollectionModule {}
