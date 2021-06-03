import { Component, Input} from '@angular/core';
import { Country } from '../../interface/country.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [
  ]
})
export class CountryTableComponent {

  @Input() countries: Country[]= [];

  constructor() { }

}
