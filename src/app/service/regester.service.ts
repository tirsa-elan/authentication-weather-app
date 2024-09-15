import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegester } from '../model/regester';
import { Observable } from 'rxjs';

@Injectable()
export class RegesterService {

  constructor(private http : HttpClient ) {}

  post(post : IRegester ): Observable<any> {
   return this.http.post("http://localhost:3000/posts", post)
  }
}
