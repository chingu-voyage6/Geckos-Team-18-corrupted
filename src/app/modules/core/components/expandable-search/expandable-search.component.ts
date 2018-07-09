import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-expandable-search',
  templateUrl: './expandable-search.component.html',
  styleUrls: ['./expandable-search.component.css'],
  animations: [
    trigger('expand', [
      state(
        'show',
        style({
          'margin-left': '0%',
          'margin-right': '0px',
          width: '100%'
        })
      ),
      state(
        'hide',
        style({
          'margin-left': '100%',
          'margin-right': '24px',
          width: '0%'
        })
      ),
      transition('* => *', animate('300ms ease-out'))
    ])
  ]
})
export class ExpandableSearchComponent {
  show: boolean = false;
  @ViewChild('container') container;
  @ViewChild('search') search: ElementRef;

  constructor() {
    document.addEventListener('click', this.offClickHandler.bind(this));
  }

  get state() {
    return this.show ? 'show' : 'hide';
  }

  offClickHandler(event: any) {
    if (!this.container.nativeElement.contains(event.target) && this.show) {
      this.show = false;
      this.search.nativeElement.value = '';
    }
  }

  toggle() {
    this.show = !this.show;
    if (this.show) {
      this.search.nativeElement.focus();
    }
  }
}
