import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { IComment } from './offers.component';

@Injectable()
export class OffersService {
  constructor(private http: Http) {}

  getOfferForUrl(url: string) {
    const body = JSON.stringify({ url });
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http
      .post('http://localhost:3333/offers/check', body, options)
      .map(request => request.json());
  }

  saveComment(offerId: string, comment: IComment) {
    const body = JSON.stringify(comment);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http
      .post(`http://localhost:3333/offers/${offerId}/comments`, body, options)
      .map(request => request.json());
  }
}
