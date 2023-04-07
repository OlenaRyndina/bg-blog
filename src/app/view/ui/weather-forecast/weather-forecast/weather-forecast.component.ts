import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { 
    initWeatherData,
    geWeatherDataOfCurCity
} from '../../../../store/weather-forecast-store/store/weather-forecast.actions';
import * as weatherForecastSelect from '../../../../store/weather-forecast-store/store/weather-forecast.selectors';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  cityName = 'Киев';
  weatherData;
  isShowWeatherPannel = false;

  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.store$.dispatch(initWeatherData());

    this.store$.pipe(
            select(weatherForecastSelect.getWeatherForecastData)
        ).subscribe(data => {
            console.log(data);
            this.weatherData = {
              current: {
                  is_day: data.current.is_day,
                  temp_c: data.current.temp_c,
                  condition: {
                      code: data.current.condition.code,
                      icon: data.current.condition.icon,
                      text: data.current.condition.text
                  },
              },
              location: {
                name: data.location.name,
                country: data.location.country
              }
            }

            console.log(this.weatherData);
        }); 
  }

  getWeatherForecastOfTheCity() {
      console.log(this.cityName);
      this.store$.dispatch(geWeatherDataOfCurCity({data: this.cityName}));
  }

  showWeatherPannel() {
      this.isShowWeatherPannel = !this.isShowWeatherPannel;
  }

}
