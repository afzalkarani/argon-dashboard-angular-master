import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';


const AUTH_API = 'https://localhost:7275/api/';

//

@Injectable({
  providedIn: 'root'
})
export class UserService { 

constructor(private http: HttpClient, private storageService: StorageService) { }
  
registerUser(user:User):Observable<any>
{
  const header = new HttpHeaders()
  .set('Content-Type', 'application/json; charset=UTF-8')
  .set('Access-Control-Allow-Origin', '*')
  
  const url = AUTH_API +  'Auth/registerUser'

  return this.http.post(
    url,
    JSON.stringify(user),    
    {
      'headers': header
    }
  );

}


  updateUser(user:User): Observable<any> {   


    const header = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=UTF-8')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Bearer ${this.storageService.gettoken()}`)

    const url = AUTH_API +  'Auth/updateUser'


    return this.http.put<boolean>(
      url,
      JSON.stringify(user),    
      {
        'headers': header
      }
    );
  }

  

  
}
