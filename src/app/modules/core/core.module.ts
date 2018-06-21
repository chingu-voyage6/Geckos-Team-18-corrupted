import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreComponent } from './components/core/core.component';
import { RoutingModule } from './routing/routing.module';
import { MaterialModule } from '../material/material.module';
import { TestComponent } from './components/test/test.component';

@NgModule({
  imports: [CommonModule, RoutingModule, MaterialModule],
  declarations: [CoreComponent, TestComponent],
  exports: [CoreComponent],
  bootstrap: [CoreComponent]
})
export class CoreModule {}
