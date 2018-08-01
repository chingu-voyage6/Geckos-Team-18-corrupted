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
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ToolbarComponent,
    LogoComponent,
    LandingComponent,
    SidenavComponent,
    ExpandableSearchComponent,
    FooterComponent,
    SearchResultsComponent
  ],
  providers: [LayoutService],
  exports: [
    ToolbarComponent,
    LogoComponent,
    LandingComponent,
    SidenavComponent,
    ExpandableSearchComponent,
    FooterComponent,
    SearchResultsComponent
  ]
})
export class CoreModule {}
