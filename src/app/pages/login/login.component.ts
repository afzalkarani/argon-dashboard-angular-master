import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { clippingParents } from '@popperjs/core';
import { mergeMap } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { StorageService } from 'src/app/service/storage.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  inSubmission = false
  showAlert = false
  alertMsg = 'Please wait! We are logging you in.'
  alertColor = 'blue'


  credentials = {
    email: '',
    password: ''
  }



  tokens = {
    refreshToken: '',
    token: ''
  }

  user:User;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];


  constructor(private authService: AuthService, private storageService: StorageService, private router: Router) { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  async login() {
    this.inSubmission = true
    this.showAlert = true
    this.alertMsg = 'Please wait! We are logging you in.'
    this.alertColor = 'blue'


    try {

      this.authService.login(this.credentials.email, this.credentials.password).subscribe({
        next: data => {
          var parsedData = data;
          this.storageService.saveAccessTokens(parsedData.token, parsedData.refreshToken)
          this.authService.getUserDetails(this.credentials.email).subscribe({
            next: user => {           
              this.user = user;
              this.storageService.saveUser(this.user)
              this.router.navigate(['/index']);             
            },
            error: user_err => {           
              //this.errorMessage = user_err.error.message;
              this.isLoginFailed = true;
            }

          })
                },
        error: err => {      
          this.inSubmission = false
          this.errorMessage = "Login Failed"
          this.isLoginFailed = true;
        }

      })

    }
    catch (e) {
      this.inSubmission = false
      this.showAlert = true
      this.alertMsg = `An unexpected error occurred. ${e}`
      this.alertColor = 'red'
      return
    }

    this.alertMsg = 'Success! You\'ve logged in.'
    this.alertColor = 'green'

  }

  reloadPage(): void {
    window.location.reload();
  }

}
