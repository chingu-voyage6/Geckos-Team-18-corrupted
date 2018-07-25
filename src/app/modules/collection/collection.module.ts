import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFirestore } from 'angularfire2/firestore';

import { MaterialModule } from '../material/material.module';
import { RoutingModule } from './routing/routing.module';

import { CollectionService } from './services/collection.service';

import { CollectionsComponent } from './components/collections/collections.component';
import { CollectionDetailComponent } from './components/collection-detail/collection-detail.component';
import { CardComponent } from './components/card/card.component';
import { CardSideComponent } from './components/card-side/card-side.component';
import { CollectionEditComponent } from './components/collection-edit/collection-edit.component';

@NgModule({
  imports: [CommonModule, RoutingModule, MaterialModule, ReactiveFormsModule],
  declarations: [CollectionsComponent, CollectionDetailComponent, CardComponent, CardSideComponent, CollectionEditComponent],
  exports: [CollectionsComponent, CollectionDetailComponent],
  entryComponents: [CollectionDetailComponent],
  providers: [AngularFirestore, CollectionService]
})
export class CollectionModule {}
