import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';

@Injectable()
export class LoginService {
  baseURL : string= "http://localhost:5000/Users/Authenticate"
  constructor(private http: HttpClient) { }

  post (userInfo : Login   ): any {
    return this.http.post(this.baseURL , userInfo)
  }

}
