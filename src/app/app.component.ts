import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'gc-app',
  directives: [
    ROUTER_DIRECTIVES,
    NavComponent,
    FooterComponent
  ],
  template: `
    <gc-nav></gc-nav>
    <div class="body container m-t-3">
      <router-outlet></router-outlet>
    </div>
    <gc-footer></gc-footer>
  `,
  styles: [`
    .body {
      min-height: calc(100vh - 85px);
    }
  `]
})
export class AppComponent {}
