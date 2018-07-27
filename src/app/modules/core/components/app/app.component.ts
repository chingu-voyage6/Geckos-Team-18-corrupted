import { Component, OnInit } from '@angular/core';

import { LayoutService } from '@core/services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
  
  }
}
