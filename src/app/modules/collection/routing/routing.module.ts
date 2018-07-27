import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionsComponent } from '../components/collections/collections.component';
import { CreateCollectionComponent } from '../components/create-collection/create-collection.component';


export const routes: Routes = [
  {
    path: '',
    component: CollectionsComponent
  },
  {
  	path: 'create',
  	component: CreateCollectionComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
