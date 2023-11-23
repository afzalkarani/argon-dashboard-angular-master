import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';
import { Country } from 'src/models/country';


const AUTH_API = 'https://localhost:7275/api/';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  getCountries(): Observable<any> {
 
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=UTF-8')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Bearer ${this.storageService.gettoken()}`)


    return this.http.get<Country>(AUTH_API + 'Country',
      {
        'headers': header
      });

  }




}
