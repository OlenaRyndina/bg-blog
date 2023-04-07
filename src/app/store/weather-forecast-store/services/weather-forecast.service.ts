import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherForecastService {

    constructor(private httpClient: HttpClient) { }

    getInitCityWeaterForecast() {
        return this.httpClient.get<any>(`https://api.weatherapi.com/v1/current.json?key=88107f32054a4affad371415232703%20&q=Киев&aqi=no`);
    }

    getWeatherForecast(city) {
        console.log(city);
        return this.httpClient.get<any>(`https://api.weatherapi.com/v1/current.json?key=88107f32054a4affad371415232703%20&q=${city}&aqi=no`);
    }
}
