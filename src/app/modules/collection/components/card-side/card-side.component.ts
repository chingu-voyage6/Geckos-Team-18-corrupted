import { Component, OnInit, Input } from '@angular/core';
import { CardSide } from '../../models/card-side.model';

@Component({
  selector: 'app-card-side',
  templateUrl: './card-side.component.html',
  styleUrls: ['./card-side.component.css']
})
export class CardSideComponent implements OnInit {
  @Input() cardSide: CardSide;
  constructor() {}

  ngOnInit() {}
}
