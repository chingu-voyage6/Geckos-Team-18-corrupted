import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';
import { RoutingModule } from './routing/routing.module';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { LayoutTestComponent } from './components/layout-test/layout-test.component';

@NgModule({
  imports: [CommonModule, RoutingModule, MaterialModule, HttpClientModule],
  declarations: [
    ToolbarComponent,
    LogoComponent,
    LayoutTestComponent
  ],
  exports: [ToolbarComponent, LogoComponent, LayoutTestComponent]
})
export class CoreModule {}
