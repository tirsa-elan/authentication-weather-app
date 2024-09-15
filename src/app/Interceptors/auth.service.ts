import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor{
constructor(https : HttpClient){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token')
    if (token) {
       req = req.clone({
        setHeaders : {
          Authorization : `Bearar ${token}`
        }
      })
    }

    return next.handle(req)
  }



}
