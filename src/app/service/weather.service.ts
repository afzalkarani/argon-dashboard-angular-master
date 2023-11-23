import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient, ) { }


getWeather(city:string): Observable<any> {   


    const header = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=UTF-8')
      .set('Access-Control-Allow-Origin', '*')

    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`



    return this.http.get(url,
    {
      'headers': header      
    });

  }


}
