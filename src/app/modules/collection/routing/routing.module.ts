import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionsComponent } from '@collection/components/collections/collections.component';
import { CreateCollectionComponent } from '@collection/components/create-collection/create-collection.component';
import { CreateCardComponent } from '@collection/components/create-card/create-card.component';
import { CardComponent } from '@collection/components/card/card.component';
import { EditCardComponent } from '@collection/components/edit-card/edit-card.component';
import { EditCollectionComponent } from '@collection/components/edit-collection/edit-collection.component';
import { CollectionGuard} from '@collection/guards/collection.guard';
import { CardGuard} from '@collection/guards/card.guard';
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
    path: 'view/:id/create',
    component: CreateCardComponent
  },
  {
    path: 'view/:id',
    component: ViewCollectionComponent,
    resolve: {
      collection: CollectionGuard,
      cards: CardGuard
    }
  },
  {
    path: 'edit/:id',
    component: EditCollectionComponent,
    resolve: {
      collection: CollectionGuard
    }
  },
  {
    path: 'edit-card/:id',
    component: EditCardComponent,
    resolve: {
      collection: CardGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CollectionGuard, CardGuard]
})
export class RoutingModule {}
