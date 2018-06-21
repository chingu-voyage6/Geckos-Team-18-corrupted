import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './routing/core-routing/core-routing.module';

import { CoreComponent } from './components/core/core.component';

@NgModule({
  imports: [CommonModule, CoreRoutingModule],
  declarations: [CoreComponent],
  exports: [CoreComponent]
})
export class CoreModule {}
