import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from '@angular/router';
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  //Inject as a dependable service
  constructor(private authService: AuthService,
              private router:Router,
              private flashMessage: FlashMessagesService
              ) { }

  ngOnInit() {
  }
  onLoginSubmit(){
    //Create and object Username and password
const user ={
  username: this.username,
  password: this.password

}
//Call the Auth Service
    this.authService.authenticateUser(user).subscribe(data => {

      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('you are now logged in', {
          cssClass: 'alert-success', timeout: 5000});
        //Redirect
        this.router.navigate(['calendar']);
      }else{
        //Error Message if the login fails
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger', timeout: 5000});
        //Redirect
        this.router.navigate(['login']);
      }
    })

  }
}
