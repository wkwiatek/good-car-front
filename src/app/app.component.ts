import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'gc-app',
  template: `
    <gc-nav></gc-nav>
    <div class="container m-t-3">
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [
    ROUTER_DIRECTIVES,
    NavComponent
  ]
})
export class AppComponent {}
