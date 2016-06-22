import { Component } from '@angular/core';

@Component({
  selector: 'gc-footer',
  template: `  
    <nav class="navbar navbar-bottom navbar-light bg-faded">
      <small class="pull-xs-right">&copy; 2016</small>
    </nav>    
  `,
  styles: [`
    .navbar-bottom {
      padding: .5rem 3rem;
    }
  `]
})
export class FooterComponent {}
