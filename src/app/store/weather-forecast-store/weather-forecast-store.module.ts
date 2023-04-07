import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { WeatherReducer, WEATHER_DATA_FEATURE_NAME } from './store/weather-forecast.reducer';
import { WeatherForecastEffects } from './store/weather-forecast.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(WEATHER_DATA_FEATURE_NAME, WeatherReducer),
    EffectsModule.forFeature([WeatherForecastEffects])
  ]
})

export class WeatherForecastStoreModule { }

