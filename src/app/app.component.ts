import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { OffersComponent } from './offers/offers.component';

@Component({
  selector: 'app',
  template: `
    <div class="container">
      <a [routerLink]="['/']" href="https://github.com/angular/angular/issues/8409"></a>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: ROUTER_DIRECTIVES
})
@Routes([
  { path: '/', component: OffersComponent }
])
export class AppComponent {}
