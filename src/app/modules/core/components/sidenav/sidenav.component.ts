import { Component, OnInit } from '@angular/core';

import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor( public nav: LayoutService ) {}

  ngOnInit() {
    this.nav.show();
  }

}
