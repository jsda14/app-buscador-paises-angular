import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchCountries } from '../interfaces/pais.interace';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) {}

  get getParams (){
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population')
  }

  buscarPais(termino: string): Observable<SearchCountries[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<SearchCountries[]>(url, {params: this.getParams});
  }

  buscarCapital(city: string): Observable<SearchCountries[]>{
    const url = `${this.apiUrl}/capital/${city}`;
    return this.http.get<SearchCountries[]>(url, {params: this.getParams})
  }

  buscarPaisPorCodigo(id: string): Observable<SearchCountries[]>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<SearchCountries[]>(url)
  }

  buscarPaisPorRegion(code: string): Observable<SearchCountries[]>{
    const url = `${this.apiUrl}/region/${code}`;
    return this.http.get<SearchCountries[]>(url, {params: this.getParams})
  }
}
