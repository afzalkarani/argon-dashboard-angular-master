import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validateHeaderName } from 'http';
import { SplitFNamePipe } from 'src/app/pipes/split-fname.pipe';
import { UserService } from 'src/app/service/user.service';
import { PasswordValidator } from 'src/app/utilities/password.validators';
import { User } from 'src/models/user';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserForm: FormGroup;
  user:User;


  
  name = new FormControl('', [ Validators.required])

  email = new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])

  password = new FormControl('', [ Validators.required,    PasswordValidator.strong  ])
  confirmPassword = new FormControl('', [ Validators.required,    PasswordValidator.strong  ])

  policy = new FormControl('', [Validators.required])

  constructor(private fb: FormBuilder,  private userService:UserService, private router: Router) { }

  ngOnInit() {

    this.registerUserForm = this.fb.group(
      {
        name:this.name,
        email:this.email,
        password:this.password,
        confirmPassword: this.confirmPassword,
        policy: this.policy
      },
      {
        validators: [PasswordValidator.matchValidator('password', 'confirmPassword')]
      }
    );


  }


  get f() { return this.registerUserForm.controls; }


  async registerUser() {


    this.user = new User()
    this.user = Object.assign(this.user, this.registerUserForm.value);
    this.user.firstName =  new SplitFNamePipe().transform(this.user.name).firstName
    this.user.lastName = new SplitFNamePipe().transform(this.user.name).lastName
    this.user.isActive = "Y"
    console.log(this.user)

 
     await this.userService.registerUser(this.user).subscribe({
       next: data => {

        if(data)
        {
          this.router.navigate(['/login']);   
        }
         
       },
       error: (e) => {
        console.error(e)
      }
     })

  }

}
