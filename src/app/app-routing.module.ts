import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCountryComponent } from './country/page/by-country/by-country.component';
import { ByRegionComponent } from './country/page/by-region/by-region.component';
import { ByCapitalComponent } from './country/page/by-capital/by-capital.component';
import { ViewCountryComponent } from './country/page/view-country/view-country.component';
const routes: Routes = [
    {
        path: '',
        component: ByCountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: ByRegionComponent,
        pathMatch: 'full'
    },
    {
        path: 'capital',
        component: ByCapitalComponent,
        pathMatch: 'full'
    },
    {
        path: 'country/:id',
        component: ViewCountryComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
@NgModule ({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}