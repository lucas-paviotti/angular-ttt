import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value" [ngStyle]="{height:'100%', width: '100%'}">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'" [ngStyle]="{height:'100%', width: '100%', 'font-size': '50px'}">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'" [ngStyle]="{height:'100%', width: '100%', 'font-size': '50px'}">{{ value }}</button>
  `,
  styles: ['']
})
export class SquareComponent {

  @Input() value: 'X' | 'O';
  
}
