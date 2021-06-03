import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interface/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private httpclient: HttpClient) {

  }

  searchCountry (query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${query}`;

    return this.httpclient.get<Country[]>(url);

    
  }
}
