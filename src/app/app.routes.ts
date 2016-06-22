import { RouterConfig } from '@angular/router';
import { OfferComponent } from './main/offer/offer.component';
import { MainComponent } from './main/main.component';
import { ContentComponent } from './main/content/content.component';

export const AppRoutes: RouterConfig = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: ContentComponent },
      { path: 'offer/:id', component: OfferComponent}
    ]
  }
];
