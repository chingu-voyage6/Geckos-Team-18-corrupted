import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionsComponent } from '@collection/components/collections/collections.component';
import { CreateCollectionComponent } from '@collection/components/create-collection/create-collection.component';
import { EditCollectionComponent } from '@collection/components/edit-collection/edit-collection.component';
import { CollectionGuard } from '@collection/guards/collection.guard';
import { ViewCollectionComponent } from '@collection/components/view-collection/view-collection.component';

export const routes: Routes = [
  {
    path: '',
    component: CollectionsComponent
  },
  {
    path: 'create',
    component: CreateCollectionComponent
  },
  {
    path: 'view/:id',
    component: ViewCollectionComponent,
    resolve: {
      collection: CollectionGuard
    }
  },
  {
    path: 'edit/:id',
    component: EditCollectionComponent,
    resolve: {
      collection: CollectionGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CollectionGuard]
})
export class RoutingModule {}
