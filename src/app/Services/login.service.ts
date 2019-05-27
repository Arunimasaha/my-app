import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { userModel } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
 httpOptions : any = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};
   
  constructor(private http: HttpClient) { 
   
    
  }
   configUrl = 'http://localhost:62444/api/';

  getuser() 
  {
  return this.http.get(this.configUrl+"users"); 
  }
  getloginuser(email : string, password :string) 
  {
  return this.http.get(this.configUrl+"users?email="+email+"&password="+password); 
  }

  saveuser( user : userModel)
  {
    console.log(user)
    return this.http.post(this.configUrl+"users",user)

  }
}
