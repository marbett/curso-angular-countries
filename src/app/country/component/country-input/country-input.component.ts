import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent {
@Output() onEnter: EventEmitter <string> = new EventEmitter();

  query: string = '';

  constructor() {
  
  }

  search () {
    console.log(' estoy en search country input component');
    this.onEnter.emit(this.query);
    
  }

}
