import { Component } from '@angular/core';
@Component({
  selector: 'a',
  templateUrl: 'a.html'
})
export class AComponent {
  text: string;
  constructor() {
    console.log('Hello AComponent Component');
    this.text = 'Hello World';
  }

}
