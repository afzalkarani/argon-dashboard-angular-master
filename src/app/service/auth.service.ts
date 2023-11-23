import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { User } from 'src/models/user';


const AUTH_API = 'https://localhost:7275/api/';



var headers_object = new HttpHeaders();
headers_object.append('Content-Type', 'application/json; charset=UTF-8');
headers_object.append('Access-Control-Allow-Origin', '*');
headers_object.append('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');

const httpOptions = {
  headers: headers_object
};



@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http: HttpClient, private storageService: StorageService) { }




  login(email: string, password: string): Observable<any> {

    

    const header = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=UTF-8')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Bearer ${this.storageService.gettoken()}`)



const url = AUTH_API +  'Auth/login'


    return this.http.post<User>(
      url,
      {
        email,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  getUserDetails(username: string): Observable<any> {
 
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=UTF-8')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Bearer ${this.storageService.gettoken()}`)


    const param = new HttpParams()
      .set('Username', username)

    return this.http.get<User>(AUTH_API + 'User/details',
      {
        'headers': header,
        params: param
      });

  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', {}, httpOptions);
  }
}
