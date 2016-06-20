import { Component, Input } from '@angular/core';


@Component({
  selector: 'circle-number',
  template: `
    <span class="circle">{{ number }}</span>
  `,
  styles: [`
    .circle {
      background: #5178D0;
      border-radius: 0.8em;
      -moz-border-radius: 0.8em;
      -webkit-border-radius: 0.8em;
      color: #ffffff;
      display: inline-block;
      font-weight: bold;
      line-height: 1.6em;
      margin-right: 15px;
      text-align: center;
      width: 1.6em; 
    }
  `],
})
export class CircleNumberComponent {
  @Input() number: number;
}
