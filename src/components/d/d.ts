import { Component } from '@angular/core';

/**
 * Generated class for the DComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'd',
  templateUrl: 'd.html'
})
export class DComponent {

  text: string;

  constructor() {
    console.log('Hello DComponent Component');
    this.text = 'Hello World';
  }

}
