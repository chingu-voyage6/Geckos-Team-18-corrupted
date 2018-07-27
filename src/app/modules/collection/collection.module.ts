import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFirestore } from 'angularfire2/firestore';

import { MaterialModule } from '../material/material.module';
import { RoutingModule } from './routing/routing.module';

import { CollectionService } from './services/collection.service';

import { CollectionsComponent } from './components/collections/collections.component';
import { CreateCollectionComponent } from './components/create-collection/create-collection.component';
import { CreateCollectionBtnComponent } from './components/create-collection-btn/create-collection-btn.component';

@NgModule({
  imports: [CommonModule, RoutingModule, MaterialModule, ReactiveFormsModule],
  declarations: [CollectionsComponent, CreateCollectionComponent, CreateCollectionBtnComponent],
  exports: [CollectionsComponent, CreateCollectionComponent, CreateCollectionBtnComponent],
  providers: [AngularFirestore, CollectionService]
})
export class CollectionModule {}
