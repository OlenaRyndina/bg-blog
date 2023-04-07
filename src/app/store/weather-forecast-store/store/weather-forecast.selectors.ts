import {  createFeatureSelector, createSelector } from '@ngrx/store';

import {  WEATHER_DATA_FEATURE_NAME, WeatherForecastDataState } from './weather-forecast.reducer';

const getFeature = createFeatureSelector<WeatherForecastDataState>(WEATHER_DATA_FEATURE_NAME);

export const getLoading = createSelector(
    getFeature,
    state => state.loading
);

export const getLoaded = createSelector(
    getFeature,
    state => state.loaded
);

export const getServerError = createSelector(
    getFeature,
    state => state.serverError
);

export const getWeatherForecastData = createSelector(
    getFeature,
    state => state.data
);


