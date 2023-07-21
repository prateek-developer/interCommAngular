import { Component, OnInit } from '@angular/core';
import { FormControl, Validators  ,FormBuilder } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  
  constructor(private fb : FormBuilder  , private _authservice :AuthServiceService , private router :Router ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    
  signUpForm= this.fb.group({
    
      FirstName: [''],
      LastName : [''],
      Email: [''],
      Dob :[''],
      Password : [''],
      Contact : [''],
      AddressLine1:[''],
      AddressLine2:[''],
      City : [''],
      State:[''],
      PermanentCity: [''],
      PermanentState : [''],
    });




    onSubmit(){
      console.log(this.signUpForm.value);
      this._authservice.register(this.signUpForm.value)
      .subscribe(
        Response => console.log('success!' , Response),
        
        error => console.error('Error' , error)
      );
    }
 
    login(){
      this.router.navigate(['/login'])
    }

}
