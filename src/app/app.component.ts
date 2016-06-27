import { Component, ViewEncapsulation } from '@angular/core';
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
    @import url(https://fonts.googleapis.com/css?family=Lato:400,300,500,700&subset=latin,latin-ext);
    
    h1, h2, h3, h4, h5, h6, p, div {
      font-family: 'Lato', sans-serif;
    }
    
    .body {
      min-height: calc(100vh - 85px);
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {}
