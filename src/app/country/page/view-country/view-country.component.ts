import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  //styleUrls: ['./view-country.component.css']
})
export class ViewCountryComponent implements OnInit {

  constructor (
    private activedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.activedRoute.params
      .subscribe (({id}) => {
        console.log(id);
        this.countryService.viewCountry (id)
          .subscribe( country => {
            console.log(country);
          })
      })

    
  }

}
