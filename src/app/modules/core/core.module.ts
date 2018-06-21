import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { TestComponent } from './components/test/test.component';
import { CoreComponent } from './components/core/core.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [CoreComponent, TestComponent],
  exports: [CoreComponent],
  bootstrap: [CoreComponent]
})
export class CoreModule {}
