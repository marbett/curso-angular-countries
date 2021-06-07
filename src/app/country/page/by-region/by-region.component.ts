import { Component, OnInit } from '@angular/core';
import { Country } from '../../interface/country.interface';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {

  query: string = "";
  isSuccessful: boolean = true;
  countries: Country[] = [];
  regions: string [] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  
  constructor(private countryService: CountryService) { 

  }

  search (query: string) {
    console.log ("estoy en el search de byregion component") 
    this.isSuccessful = true;
    this.query = query;
    console.log (this.query);
    this.countryService.searchRegion(this.query)
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

    getCssClass (query: string): string {
      return (this.query === query) ? 'btn btn-primary' : 'btn btn-outline-primary';
    }
  

}
