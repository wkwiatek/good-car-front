import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SearchOfferComponent } from './search-offer/search-offer.component';

@Component({
  selector: 'gc-main',
  directives: [
    SearchOfferComponent,
    ROUTER_DIRECTIVES
  ],
  template: `
    <gc-search-offer></gc-search-offer>
    <router-outlet></router-outlet>
  `
})
export class MainComponent {}
