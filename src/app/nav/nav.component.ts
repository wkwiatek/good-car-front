import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'gc-nav',
  directives: ROUTER_DIRECTIVES,
  template: `
    <div class="container">
      <nav class="navbar navbar-light bg-faded navbar-fixed-top">
        <a class="navbar-brand" [routerLink]="['/']">
          <img class="logo" src="../images/logo.png" alt="Pewne Auto">
          <span class="name">PewnyWóz.pl</span>
          <span class="beta">beta</span>
        </a>
      </nav>
    </div>
  `,
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
export class NavComponent {}
