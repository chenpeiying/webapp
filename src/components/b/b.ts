import { Component } from '@angular/core';
@Component({
  selector: 'b',
  templateUrl: 'b.html'
})
export class BComponent {

  text: string;

  constructor() {
    console.log('Hello BComponent Component');
    this.text = 'Hello World';
  }

}
