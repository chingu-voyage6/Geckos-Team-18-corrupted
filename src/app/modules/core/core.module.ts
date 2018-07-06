import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { RoutingModule } from './routing/routing.module';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RoutingModule],
  declarations: [ToolbarComponent, LogoComponent, LandingComponent],
  exports: [ToolbarComponent, LogoComponent, LandingComponent]
})
export class CoreModule {}
