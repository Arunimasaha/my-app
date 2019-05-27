import { Component, OnInit } from '@angular/core';
import {LoginService} from '../Services/login.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email : string;
  password : string;
  constructor(public service : LoginService) { 
    
  }
  login(){
    console.log("in login");
    this.service.getloginuser(this.email,this.password).subscribe(
      (result : any)=> {          
        console.log("success"); 
        console.log(result.name);         
      },
      (error : any)=> {          
        console.log(error);          
      }
    );
  }
  ngOnInit() {
    this.email = "";
    this.password ="";

  }
  
}
