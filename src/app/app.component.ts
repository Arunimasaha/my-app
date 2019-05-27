import { Component,HostListener, Directive } from '@angular/core';
import {LoginService} from './Services/login.service'
import {cors} from 'cors'

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Hi this is Arunima';

  //array of months.
  months = ["January", "Feburary", "March", "April",
           "May", "June", "July", "August", "September",
           "October", "November", "December"];
  isavailable = true;
  myClickFunction(event) { 
     //just added console.log which will display the event details in browser on click of the button.
     alert("Button is clicked");
     console.log(event);
  }
  changemonths(event)
  {
    alert("option is changed");
    console.log(event);
  }
  
  constructor(public service : LoginService)
  {

  }
  value =0; 
  @HostListener('keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.increment();
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.decrement();
    }
  }
  increment() {
    this.value++;
  }
  
  decrement() {
    this.value--;
  }

  login(){
    console.log("in login");
    this.service.getuser().subscribe(
      (result : any)=> {          
        console.log(result);          
      },
      (error : any)=> {          
        console.log(error);          
      }
    );
  }
}
