import { Component } from '@angular/core';
import { Country } from '../../interface/country.interface';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

  query: string = "";
  isSuccessful: boolean = true;
  showSuggests: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];

  constructor(private countryService: CountryService) { 

  }

  search (query: string) {
    console.log ("estoy en el search de bycountry component") 
    this.isSuccessful = true;
    this.showSuggests = false;
    this.query = query;
    console.log (this.query);
    this.countryService.searchCountry(this.query)
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
    this.showSuggests = true;
    this.query = query;
    this.countryService.searchCountry(query)
            .subscribe(
              countries => this.suggestedCountries = countries.splice(0, 3),
              (err) => this.suggestedCountries = []
            )
  }

}
