import { createReducer, on } from '@ngrx/store';

import { 
    initWeatherData, 
    initWeatherDataSuccess, 
    initWeatherDataFailed,
    geWeatherDataOfCurCity
} from './weather-forecast.actions';

export const WEATHER_DATA_FEATURE_NAME = 'weather-forecast';

export interface WeatherForecastDataState {
	  loading: boolean;
	  loaded: boolean;
	  serverError: string;
	  data: any;
}

const initialState: WeatherForecastDataState = {
    loaded: false,
    loading: false,
    serverError: '',
    data: ''
};

export const WeatherReducer = createReducer(
	initialState,
	on(initWeatherData, (state, action) => state.loaded ? state : {
		...state,
		loading: true
	}),
	on(initWeatherDataSuccess, (state, action) => ({
		...state,
		loading: false,
		loaded: true,
		serverError: null,
		data: action.data
	  })),
    on(initWeatherDataFailed, (state, action) => ({
    	...state,
    	loading: false,
    	loaded: true,
    	serverError: action.serverError,
    	data: []
    })),
    on(geWeatherDataOfCurCity, (state, action) => ({
    	...state,
    	data: action.data
    }))
);