import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';


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

}
