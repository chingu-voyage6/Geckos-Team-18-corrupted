import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionsComponent } from '../components/collections/collections.component';
import { SingularCollectionComponent } from '../components/singular-collection/singular-collection.component';

export const routes: Routes = [
	
  {
    path: 'singular-collection',
    component: SingularCollectionComponent
  },

  {
    path: '',
    component: CollectionsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
