import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/service/storage.service';
import { UserService } from 'src/app/service/user.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule  } from '@angular/forms';



import { User } from 'src/models/user';
import { of } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit  {

  editMode:boolean = false;
  inSubmission = false

  updateUserDetails: FormGroup;


  constructor(
    private storageService: StorageService, 
    private userService:UserService,   
    private fb: FormBuilder) { }
 

  user:User;


  editUserDetails()
  {
    this.editMode=true
  }

  cancelEditUser(){
    this.editMode=false
  }
 
  ngOnInit() {

    
   
    const source = of(this.storageService.getUser()).subscribe({
      next: (data)=> {
        this.user = data
      }
    });


    this.updateUserDetails = this.fb.group(   
      {
       userName :[this.user == null && this.user.userName ? '' : this.user.userName ,Validators.required],
       email :[this.user == null && this.user.email ? '' : this.user.email,[Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]],
       firstName :[this.user == null && this.user.firstName ? '' : this.user.firstName, [Validators.required, Validators.minLength(3)]],
       lastName :[this.user == null && this.user.lastName ? '' : this.user.lastName, Validators.required],
       
       address :[this.user == null && this.user.address ? '' : this.user.address, [Validators.required, Validators.minLength(25)]],
       city :[this.user == null && this.user.city ? '' : this.user.city, Validators.required],
       country :[this.user == null && this.user.country ? '' : this.user.country, Validators.required],
 
       pincode :[this.user == null && this.user.pincode ? '' : this.user.pincode, [Validators.required, Validators.minLength(3)]]
 
      }
 
      //   {
      //   name: ['', Validators.required],
      //   email: ['', [Validators.required, Validators.email]],
      //   username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      //   password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      //   confirmPassword: ['', [Validators.required]],
      //  },
      //   {
      //     validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      //   }
      );
     
  }


  get f() { return this.updateUserDetails.controls; }



//  get username(){
//    return this.updateUserDetails.get('userName');
//  }

//  get email()
//  {
//   return this.updateUserDetails.get('email');
//  }

  async updateUser()
  { 
     this.inSubmission = true


     if (this.updateUserDetails.invalid) {
      return
     }

      try{

       //   this.user = new User(this.updateUserDetails.value);

       this.user = Object.assign(this.user, this.updateUserDetails.value);
        await this.userService.updateUser(this.user).subscribe({
          next: data => {
            console.log(data)
            this.inSubmission=data
            this.editMode=false
          }
        })
  
           
     }
     catch(e)
     {
      this.inSubmission = false
      return
     }
    



   
  }

}


