import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';
import { RoutingModule } from './routing/routing.module';


import { TestComponent } from './components/test/test.component';
import { CoreComponent } from './components/core/core.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [
    CoreComponent,
    TestComponent,
    ToolbarComponent,
    LogoComponent,
    LandingComponent
  ],
  exports: [
    CoreComponent,
    TestComponent,
    ToolbarComponent,
    LogoComponent,
    LandingComponent
  ]
})
export class CoreModule {}
