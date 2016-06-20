import { Component } from '@angular/core';
import { CircleNumberComponent } from '../../shared/components/circle-number';

@Component({
  selector: 'gc-content',
  directives: [
    CircleNumberComponent
  ],
  template: `
    <div class="col-sm-4">      
      <div class="card card-block text-xs-center">
        <h2 class="card-text">
          <circle-number [number]="1"></circle-number>
        </h2>
        <h4 class="card-title">Znajdź ogłoszenie</h4>
      </div>
    </div>
    <div class="col-sm-4">
    </div>
    <div class="col-sm-4">
    </div>
  `
})
export class ContentComponent {}
