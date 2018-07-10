import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, Event, NavigationStart } from '@angular/router';

export interface LayoutState {
  toolbar: boolean;
  sidenav: boolean;
}

export const initialState: LayoutState = {
  toolbar: true,
  sidenav: false
};
@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  layoutState = new BehaviorSubject<LayoutState>(initialState);

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        switch (event.url) {
          /*case '/home': {
            this.layoutState.next({
              toolbar: false,
              sidenav: false
            });
            break;
          }*/
          default: {
            this.layoutState.next(initialState);
            break;
          }
        }
      }
    });
  }
}
