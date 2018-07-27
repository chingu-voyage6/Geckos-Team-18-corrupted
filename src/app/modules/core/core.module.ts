import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';
import { RoutingModule } from '@core/routing/routing.module';

import { LayoutService } from '@core/services/layout.service';

import { ToolbarComponent } from '@core/components/toolbar/toolbar.component';
import { LogoComponent } from '@core/components/logo/logo.component';
import { LandingComponent } from '@core/components/landing/landing.component';
import { SidenavComponent } from '@core/components/sidenav/sidenav.component';
import { ExpandableSearchComponent } from '@core/components/expandable-search/expandable-search.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RoutingModule],
  declarations: [
    ToolbarComponent,
    LogoComponent,
    LandingComponent,
    SidenavComponent,
    ExpandableSearchComponent,
    FooterComponent
  ],
  providers: [LayoutService],
  exports: [ToolbarComponent, LogoComponent, LandingComponent, SidenavComponent]
})
export class CoreModule {}
