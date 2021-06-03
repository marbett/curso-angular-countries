import { Component } from '@angular/core';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  //styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

  query: string = "";
  isSuccessful: boolean = true;

  constructor(private countryService: CountryService) { 

  }

  search () {
    this.isSuccessful = true;
    console.log (this.query);
    this.countryService.searchCountry(this.query)
      .subscribe( countries => {
        console.log(countries);
      }, (err) => {
        this.isSuccessful = false;
        console.log("ha ocurrido un error", err);
      }

      )
    ;
  }

}
