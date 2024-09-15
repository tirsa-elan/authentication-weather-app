import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {

    baseUrl: string = 'http://localhost:5000/Users';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<any> {
        return this.http.get(this.baseUrl)
    }
}