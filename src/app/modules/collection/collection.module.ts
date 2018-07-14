import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing/routing.module';
import { CollectionsComponent } from './components/collections/collections.component';
import { CollectionService } from './services/collection.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, RoutingModule, MaterialModule, ReactiveFormsModule],
  declarations: [CollectionsComponent],
  exports: [CollectionsComponent],
  providers: [AngularFirestore, CollectionService]
})
export class CollectionModule {}
