import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor( public layoutService: LayoutService, private authService: AuthService ) {}

  ngOnInit() {
  }

}
