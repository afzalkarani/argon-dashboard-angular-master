import { Injectable } from '@angular/core';
import { clippingParents } from '@popperjs/core';
import { log } from 'console';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';


const USER_KEY = 'auth-user';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

   tokens = {
    refreshToken:'',
    token:''
  }


  constructor() { }


  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);   
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));

    
  }

  public saveAccessTokens(accessToken:string, refreshToken:string)
  {
    
    this.tokens.refreshToken= refreshToken;
    this.tokens.token=accessToken;
  }


  public gettoken() : string
  {    
    return this.tokens.token
  }


  public getUser(): User {
    const user = window.sessionStorage.getItem(USER_KEY);


    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

public getUsers() {
  return  Observable.create(observer => {
    setTimeout(() => {
      const user = window.sessionStorage.getItem(USER_KEY);
      observer.next(user); // This method same as resolve() method from Angular 1
      observer.complete();//to show we are done with our processing
      // observer.error(new Error("error message"));
    }, 2000);
  
  })
}


  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

  
}
