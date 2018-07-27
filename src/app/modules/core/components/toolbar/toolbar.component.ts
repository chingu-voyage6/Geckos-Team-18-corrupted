import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@core/services/layout.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  constructor(public layoutService: LayoutService) {}

  ngOnInit() {}
}
