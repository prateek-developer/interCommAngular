import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthComponent } from './auth.component';
import { RouterLink, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [

    SignUpComponent,
    AuthComponent,
    LoginComponent,
  
  ],
  imports: [
    
    CommonModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
  ]
})

export class AuthenticationModule {


  
}