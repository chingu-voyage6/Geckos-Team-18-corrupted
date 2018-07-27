import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFirestore } from 'angularfire2/firestore';

import { MaterialModule } from '@material/material.module';
import { RoutingModule } from '@collection/routing/routing.module';

import { CollectionService } from '@collection/services/collection.service';

import { CollectionsComponent } from '@collection/components/collections/collections.component';
import { CreateCollectionComponent } from '@collection/components/create-collection/create-collection.component';
import { CreateCollectionBtnComponent } from '@collection/components/create-collection-btn/create-collection-btn.component';
import { CollectionComponent } from '@collection/components/collection/collection.component';
import { EditCollectionComponent } from './components/edit-collection/edit-collection.component';
import { DeleteCollectionDialogComponent } from './components/delete-collection-dialog/delete-collection-dialog.component';
import { ViewCollectionComponent } from './components/view-collection/view-collection.component';

@NgModule({
  imports: [CommonModule, RoutingModule, MaterialModule, ReactiveFormsModule],
  declarations: [
    CollectionComponent,
    CollectionsComponent,
    CreateCollectionComponent,
    CreateCollectionBtnComponent,
    EditCollectionComponent,
    DeleteCollectionDialogComponent,
    ViewCollectionComponent
  ],
  exports: [
    CollectionComponent,
    CollectionsComponent,
    CreateCollectionComponent,
    CreateCollectionBtnComponent
  ],
  entryComponents: [DeleteCollectionDialogComponent],
  providers: [AngularFirestore, CollectionService]
})
export class CollectionModule {}
