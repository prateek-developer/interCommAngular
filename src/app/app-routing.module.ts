import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { SignUpComponent } from './authentication/components/sign-up/sign-up.component';

const routes: Routes = [

  {path : 'authentication' , children:[
    {path : 'login' , component: LoginComponent},
    {path : 'signUp' , component: SignUpComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
