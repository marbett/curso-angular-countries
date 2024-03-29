import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'; //recibir un observable y retornar otro observable
import { Country } from '../../interface/country.interface';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  //styleUrls: ['./view-country.component.css']
})
export class ViewCountryComponent implements OnInit {

  country!: Country;

  constructor (
    private activedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    /*
    this.activedRoute.params
      .subscribe (({id}) => {
        console.log(id);
        this.countryService.viewCountry (id)
          .subscribe( country => {
            console.log(country);
          })
      })
    */
    this.activedRoute.params
      .pipe(
        switchMap( ({id}) =>  this.countryService.viewCountry(id)),
        tap (console.log)
      )
      .subscribe (country => this.country = country );
    
  }

}
