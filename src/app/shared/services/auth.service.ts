import { Injectable } from '@angular/core';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  private lock: any = new Auth0Lock('Cnye7DbilWWjr812FEdBQedNw1PrbYQm', 'pewnywoz.eu.auth0.com');

  login() {
    this.lock.show({
      dict: 'pl'
    },(error: string, profile: Object, id_token: string) => {
      if (error) {
        console.log(error);
      }
      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', id_token);
    });
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }
}
