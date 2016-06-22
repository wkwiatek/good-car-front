import { Component } from '@angular/core';
import { CircleNumberComponent } from '../../shared/components/circle-number';

@Component({
  selector: 'gc-content',
  directives: [
    CircleNumberComponent
  ],
  template: `
    <div class="m-t-3">
    <div class="col-sm-4">      
      <div class="card card-block text-xs-center">
        <h2 class="card-text m-b-2">
          <circle-number [number]="1"></circle-number>
        </h2>
        <h4 class="card-title">Znajdź ogłoszenie</h4>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card card-block text-xs-center">
        <h2 class="card-text m-b-2">
          <circle-number [number]="2"></circle-number>
        </h2>
        <h4 class="card-title">Wklej link</h4>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card card-block text-xs-center">
        <h2 class="card-text m-b-2">
          <circle-number [number]="3"></circle-number>
        </h2>
        <h4 class="card-title">Zobacz dyskusję</h4>
      </div>
    </div>
    </div>
  `,
  styles: [`
    .card-block {
      padding: 3rem 1rem;
    }
  `]
})
export class ContentComponent {}
