import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';

import { TestComponent } from './components/test/test.component';
import { CoreComponent } from './components/core/core.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, HttpClientModule],
  declarations: [CoreComponent, TestComponent, ToolbarComponent, LogoComponent],
  exports: [CoreComponent, TestComponent, ToolbarComponent]
})
export class CoreModule {}
