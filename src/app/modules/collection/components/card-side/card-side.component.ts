import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-side',
  templateUrl: './card-side.component.html',
  styleUrls: ['./card-side.component.css']
})
export class CardSideComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
