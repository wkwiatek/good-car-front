import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { IComment } from '../interfaces/comment.interface';
import { IOffer } from '../interfaces/offer.interface';

@Injectable()
export class OffersService {
  public currentOffer: IOffer;

  constructor(
    private http: Http,
    private authHttp: AuthHttp
  ) {}

  getOfferForUrl(url: string) {
    const body = JSON.stringify({ url });
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http
      .post(`${API_URL}/offers/check`, body, options)
      .map(request => request.json());
  }

  getOfferById(id: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http
      .get(`${API_URL}/offers/${id}`, options)
      .map(request => request.json());
  }

  saveComment(offerId: string, comment: IComment) {
    const body = JSON.stringify(comment);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    // return this.authHttp
    return this.http
      .post(`${API_URL}/offers/${offerId}/comments`, body, options)
      .map(request => request.json());
  }
}
