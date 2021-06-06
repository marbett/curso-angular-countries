import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})

export class CountryInputComponent implements OnInit {

  @Output() onEnter: EventEmitter <string> = new EventEmitter();
  @Output() onDebounce: EventEmitter <string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  query: string = '';

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300)) //no emitas el subscribe hasta que el observable debouncer deje de emitir valores por los proximos 300 milisegundos 
    .subscribe (value => {
        console.log('debouncer:', value);
        this.onDebounce.emit(value); //también sirve pasar el this.query
    })
  };

  constructor() {

  }

  search () {
    console.log('Estoy en search country input component');
    this.onEnter.emit(this.query);
  }

  onKeyPressed() {
    this.debouncer.next(this.query);
  }

  /*onKeyPressed(event: any) {
    const valor  = event.target.value;
    console.log(valor);
    console.log(this.query);
  }*/

}
