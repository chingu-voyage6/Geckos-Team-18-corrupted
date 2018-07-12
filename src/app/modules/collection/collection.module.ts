import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing/routing.module';
import { CollectionsComponent } from './components/collections/collections.component';

@NgModule({
  imports: [CommonModule, RoutingModule],
  declarations: [CollectionsComponent],
  exports: [CollectionsComponent]
})
export class CollectionModule {}
