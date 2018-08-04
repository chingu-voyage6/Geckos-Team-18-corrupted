import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card.model';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardReverse', [
      state('showFront', style({
        transform: 'rotateY(360deg)'
      })),
      state('hideFront',   style({
        transform: 'rotateY(180deg)'
      })),
      state('showBack', style({
        transform: 'rotateY(180deg)'
      })),
      state('hideBack',   style({
        transform: 'rotateY(360deg)'
      })),
      transition('showFront => hideFront', animate('1000ms ease-out')),
      transition('hideFront => showFront', animate('1000ms ease-in')),
      transition('showBack => hideBack', animate('1000ms ease-out')),
      transition('hideBack => showBack', animate('1000ms ease-in'))
    ])
  ]
})
export class CardComponent implements OnInit {
  show = true;
  @Input() card: Card;
  constructor() { }

  ngOnInit() {
  }

  get frontReverse() {
    return this.show ? 'showFront' : 'hideFront'
  }

  get backReverse() {
    return this.show ? 'showBack' : 'hideBack'
  }

  toggle() {
    this.show = !this.show;
  }
}
