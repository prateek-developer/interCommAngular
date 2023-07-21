import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { SignUpComponent } from './authentication/components/sign-up/sign-up.component';
import { LandingPageComponent } from './common-module/components/landing-page/landing-page.component';

const routes: Routes = [


    {path : 'login' , component: LoginComponent},
    {path : 'signUp' , component: SignUpComponent},
 


    {path : 'welcome' , component : LandingPageComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
