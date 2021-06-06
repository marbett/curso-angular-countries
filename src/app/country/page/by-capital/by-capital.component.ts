import { Component } from '@angular/core';
import { Country } from '../../interface/country.interface';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  //styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent {

  query: string = "";
  isSuccessful: boolean = true;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { 

  }

  search (query: string) {
    console.log ("estoy en el search de bycapital component") 
    this.isSuccessful = true;
    this.query = query;
    console.log (this.query);
    this.countryService.searchCapital(this.query)
      .subscribe( countries => {
        console.log(countries);
        this.countries = countries;
      }, (err) => {
        this.isSuccessful = false;
        console.log("ha ocurrido un error", err);
        this.countries = [];
      }

      )
    ;
  }

  suggest ( query: string) {
    this.isSuccessful = true;
    //TODO crear sugerencias
  }

}
