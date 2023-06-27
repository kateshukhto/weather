import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {WeatherData} from "../models/weather.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.apiBaseUrl, {
      params: new HttpParams()
        .set('key', environment.secretKey)
        .set('q', city)
        .set('aqi', 'no')
    })
  }
}
