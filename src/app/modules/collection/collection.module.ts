import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFirestore } from 'angularfire2/firestore';

import { RoutingModule } from './routing/routing.module';

import { CollectionService } from './services/collection.service';

import { CollectionsComponent } from './components/collections/collections.component';
import { CollectionDetailComponent } from './components/collection-detail/collection-detail.component';

@NgModule({
  imports: [CommonModule, RoutingModule],
  declarations: [CollectionsComponent, CollectionDetailComponent],
  exports: [CollectionsComponent, CollectionDetailComponent],
  entryComponents: [CollectionDetailComponent],
  providers: [AngularFirestore, CollectionService]
})
export class CollectionModule {}
