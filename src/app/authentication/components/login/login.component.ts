import { Component } from '@angular/core';
import { FormControl, Validators , FormBuilder, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
//import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(private fb : FormBuilder  , private _authservice :AuthServiceService , private router : Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    
  LoginForm= this.fb.group({
    
      
      Email: [''  , Validators.required],
    
      Password : ['', Validators.required],
    
    });




    OnSubmit(){
     
  
      console.log(this.LoginForm.value)
        //send the object to database
        this._authservice.LoginUser(this.LoginForm.value).subscribe({
          next:(res)=>{
            alert(res.message)
            this.LoginForm.reset();
            this._authservice.storeToken(res.token);
            
         
  
          },
          error:(err)=>{
            alert(err.error.message)
          }
         
        })
        
      } 
       
      
      }
  
      
  
    

    
   
  
 



