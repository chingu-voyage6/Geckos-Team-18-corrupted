import { AfterContentInit, Component, ViewChild } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterContentInit {
  @ViewChild('grid') grid: MatGridList;

  gridByBreakpoint = {
    xl: 2,
    lg: 2,
    md: 2,
    sm: 1,
    xs: 1
  };

  constructor(private observableMedia: ObservableMedia) {}

  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }
}
