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
          width: '100%'
        })
      ),
      state(
        'hide',
        style({
          'margin-left': '100%',
          width: '0%'
        })
      ),
      transition('* => *', animate('300ms cubic-bezier(0.0, 0.0, 0.2, 1)'))
    ])
  ]
})
export class ExpandableSearchComponent {
  show = false;
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
