import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByCapitalComponent } from './page/by-capital/by-capital.component';
import { ByCountryComponent } from './page/by-country/by-country.component';
import { ByRegionComponent } from './page/by-region/by-region.component';
import { ViewCountryComponent } from './page/view-country/view-country.component';



@NgModule({
  declarations: [
    
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    ViewCountryComponent
  ],
  exports: [
    
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    ViewCountryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountryModule { }
