import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { IWeather } from '../model/weather';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  constructor(private weatherService: WeatherService) { }
  weatherData: IWeather = {} as IWeather

  ngOnInit(): void {
    this.getWeaderByCityName("Tehran");
  }

  getWeaderByCityName(cityName: string) {
    this.weatherService.get(cityName).subscribe(res => {
      this.weatherData = res
    })
  }

  changeCityName(event: Event) {
    const value = (<HTMLInputElement>event.target).value;
    this.getWeaderByCityName(value)
  }
}
