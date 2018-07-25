import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionsComponent } from '../components/collections/collections.component';
import { CardComponent } from '../components/card/card.component';
import { CollectionEditComponent } from '../components/collection-edit/collection-edit.component';

export const routes: Routes = [
  {
    path: '',
    component: CollectionsComponent
  },
  {
    path: ':id',
    component: CollectionEditComponent
  },
  {
    path: 'cards',
    component: CardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
