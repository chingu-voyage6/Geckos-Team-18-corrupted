import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { RoutingModule } from './routing/routing.module';

import { LayoutService } from './services/layout.service';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { LandingComponent } from './components/landing/landing.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ExpandableSearchComponent } from './components/expandable-search/expandable-search.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RoutingModule],
  declarations: [
    ToolbarComponent,
    LogoComponent,
    LandingComponent,
    SidenavComponent,
    ExpandableSearchComponent
  ],
  providers: [LayoutService],
  exports: [
    ToolbarComponent,
    LogoComponent,
    LandingComponent,
    SidenavComponent,
    ExpandableSearchComponent
  ]
})
export class CoreModule {}
