import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
   baseURL : string ="http://localhost:5000/WeatherForecast/GetWeatherByCityName"
    constructor(private http: HttpClient) { }
    get(cityName: string) : Observable<any>  {
        let Option = {
            headers: new HttpHeaders()
            .set("Authorization", localStorage.getItem('token')!),
            params: new HttpParams()
            .set("CityName", cityName)
        }
      return  this.http.get(this.baseURL , Option)
    }

}