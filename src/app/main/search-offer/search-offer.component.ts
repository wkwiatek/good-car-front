import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  REACTIVE_FORM_DIRECTIVES,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { OffersService } from '../../shared/services/offers.service';

import { amplitude } from '../../../amplitude';

@Component({
  selector: 'gc-search-offer',
  directives: [
    REACTIVE_FORM_DIRECTIVES
  ],
  template: `
    <div class="row">
      <div class="col-sm-8 offset-sm-2 m-t-3 m-b-2">
        <form
          [formGroup]="searchForm"
          (ngSubmit)="onSearch(searchForm.value)"
          novalidate
        >
          <fieldset class="form-group">
            <div class="input-group">
              <input
                id="url" 
                class="form-control" 
                placeholder="Wklej adres url ogłoszenia..."
                formControlName="url"
              >
              <span class="input-group-btn">
                <button class="btn btn-primary">Szukaj</button>
              </span>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  `
})
export class SearchOfferComponent {
  public searchForm: FormGroup;

  constructor(
    private router: Router,
    private offersService: OffersService
  ) {
    this.searchForm = new FormGroup({
      url: new FormControl('', Validators.required)
    });
  }

  public onSearch({ url }): void {
    amplitude.logEvent('SEARCHED', { url });
    this.offersService.getOfferForUrl(url).subscribe(response => {
      this.offersService.currentOffer = response;
      (<FormControl>this.searchForm.controls['url']).updateValue('');
      this.router.navigate(['/offer', response._id]);
    });
  }
}
