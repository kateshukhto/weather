import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./services/weather.service";
import {WeatherData} from "./models/weather.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private weatherService: WeatherService) {}

  weatherData?: WeatherData;
  cityName: string = 'Minsk'
  ngOnInit() {
    this.getWeatherData(this.cityName);
    this.cityName = ''
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = ''
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeather(cityName)
      .subscribe({
        next:(res) => {
          this.weatherData = res;
        }
      })
  }
}
