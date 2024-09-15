import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {

    baseUrl: string = 'http://localhost:5000/Users';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<any> {
        let httpOption = {
            headers: new HttpHeaders()
            .set("Authorization", localStorage.getItem('token')!)
        }
      
        return this.http.get(this.baseUrl,httpOption)
    }
}