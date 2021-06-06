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

  searchCapital (query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${query}`;
    return this.httpclient.get<Country[]>(url);
  }

  searchRegion (query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${query}`;
    return this.httpclient.get<Country[]>(url);
  }

  viewCountry (id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.httpclient.get<Country>(url);
  }
}
