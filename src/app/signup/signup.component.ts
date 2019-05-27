import { Component, OnInit } from '@angular/core';
import {userModel} from '../model/user.model';
import { LoginService} from '../Services/login.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user :  userModel = {name: '',password:'', emailid :''};
  verifypassword : string;
  constructor(public service : LoginService,private router: Router) { }
  signup()
  {
    console.log(this.user.name, this.user.emailid,this.user.password, this.verifypassword)
    if(this.user.password!= this.verifypassword)
    {
      alert("password doesnot match");
    }
    else
    {
    this.service.saveuser(this.user).subscribe
   (
     (result : any) => 
     {
     console.log("success"); 
     
     this.router.navigate(['/login'])

     },
     (error :any) => (console.log("error")
     )
   );
    }
  }

  ngOnInit() {
  }

}
