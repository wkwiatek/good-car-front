import { enableProdMode } from '@angular/core';

if (WEBPACK_ENV === 'production') {
  enableProdMode();
}

import 'rxjs/Rx';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { provideForms, disableDeprecatedForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app/app.component';
import { AppRoutes } from './app/app.routes';
import { OffersService } from './app/offers/offers.service';

bootstrap(AppComponent, [
  provideRouter(AppRoutes),
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
  OffersService
]);
