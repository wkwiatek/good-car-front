import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'gc-nav',
  directives: ROUTER_DIRECTIVES,
  providers: [AuthService],
  template: require('./nav.template.html'),
  styles: [`
    @import url(https://fonts.googleapis.com/css?family=Varela+Round);
    @import url(https://fonts.googleapis.com/css?family=Nothing+You+Could+Do);
    
    .navbar {
      padding: 0 3rem;
    }
    .logo {
      height: 50px;
      display: inline-block;
      float: left;
    }
    .navbar-brand {
      font-family: 'Varela Round', sans-serif;    
    }
    .navbar-brand > .name {
      padding: 0px;
      float: left;
      top: 15px;
      position: absolute;
    }
    .beta {
      font-family: 'Nothing You Could Do', cursive;
      color: #1e88e5;
      float: left;
      left: 225px;
      position: absolute;
    }
  `]
})
export class NavComponent {
  constructor(private auth: AuthService) {}
}
