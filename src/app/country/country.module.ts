import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByCapitalComponent } from './page/by-capital/by-capital.component';
import { ByCountryComponent } from './page/by-country/by-country.component';
import { ByRegionComponent } from './page/by-region/by-region.component';
import { ViewCountryComponent } from './page/view-country/view-country.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CountryTableComponent } from './component/country-table/country-table.component';
import { CountryInputComponent } from './component/country-input/country-input.component';



@NgModule({
  declarations: [
    
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    ViewCountryComponent,
    CountryTableComponent,
    CountryInputComponent
  ],
  exports: [
    
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    ViewCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class CountryModule { 

  
}
