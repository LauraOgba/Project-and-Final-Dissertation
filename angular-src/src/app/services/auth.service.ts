import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class AuthService {
authToken: any;
user: any;
  constructor(private http:Http) { }
  registerUser(user):any{
    //Set a header value
    let headers = new Headers();
    //Add content type of json
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
    .map(res => res.json());
  }

  authenticateUser(user){
    //Make a post request to authenticate
    //Set a header value
    let headers = new Headers();
    //Add content type of json
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
      .map(res => res.json());
  }

  getProfile(){
    //Set a header value
    let headers = new Headers();
    this.loadToken(); //access is now permitted

    //Add content type of json
    headers.append('Authorization', this.authToken); //sending token with the header to the request or endpoint
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile',{headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    //local storage can only store strings can't store objects
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;

  }

  //fetch data from local store
  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token; //this is  a class property that can be accessed from anywhere

  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
