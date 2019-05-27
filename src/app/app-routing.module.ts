import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../app/login-page/login-page.component';
import {HomePageComponent} from '../app/home-page/home-page.component'
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
{path :'', component : HomePageComponent},
{ path: 'login', component: LoginPageComponent },
 { path: 'signup', component: SignupComponent}

];
@NgModule({
 imports: [
 RouterModule.forRoot(appRoutes)
],
 exports: [RouterModule]
})
export class AppRoutingModule { };