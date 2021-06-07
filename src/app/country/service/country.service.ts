import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interface/country.interface';
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private httpclient: HttpClient) {

  }
  get httpParams () {
    return new HttpParams().set('fields', 'name;nativeName;capital;alpha2Code;flag;population');
  }

  searchCountry (query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${query}`;
    return this.httpclient.get<Country[]>(url, {params: this.httpParams});
  }

  searchCapital (query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${query}`;
    return this.httpclient.get<Country[]>(url, {params: this.httpParams});
  }

  searchRegion (query: string): Observable<Country[]> {    
    const url = `${this.apiUrl}/region/${query}`;
    return this.httpclient.get<Country[]>(url, {params: this.httpParams})
      .pipe(
        tap(console.log)
      )
    ;
  }

  viewCountry (id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.httpclient.get<Country>(url);
  }
}
