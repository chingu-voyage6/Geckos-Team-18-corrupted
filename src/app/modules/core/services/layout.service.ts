import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  visible: boolean;

  constructor() {
    this.visible = false;
  }

  hide() {
    this.visible = false;
  }

  show() {
    this.visible = true;
  }

  toggle() {
    this.visible = !this.visible;
  }

  success() {
    return 'Service works!';
  }
}

// test boolean values of the element on which the service has an effect
// i.e. button toggling true/false

// observable
