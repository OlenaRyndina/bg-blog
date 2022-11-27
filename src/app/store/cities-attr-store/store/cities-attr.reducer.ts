import { createReducer, on } from '@ngrx/store';

import { initCitiesAttrData, initCitiesAttrDataSuccess, initCitiesAttrDataFailed } from './cities-attr.actions';

export const CITIES_ATTR_DATA_FEATURE_NAME = 'cities-attr';

export interface CitiesAttr {
  cityName: string;
	cityAttractions: string;
	nameCityAttractions: string;
	adress: string;
	phone: string;
	site: string;
	workHours: string;
	ticketPrice: string;
	coordX: string;
	coordY: string;
	like: number;
}

export interface CitiesAttrDataState {
	loading: boolean;
	loaded: boolean;
	serverError: string;
	data?: any;
}

const initialState: CitiesAttrDataState = {
    loaded: false,
    loading: false,
    serverError: '',
    data: []
};

export const CitiesAttrReducer = createReducer(
	initialState,
	on(initCitiesAttrData, state => state.loaded ? state : {
		...state,
		loading: true
	}),
	on(initCitiesAttrDataSuccess, (state, action) => ({
		...state,
		loading: false,
		loaded: true,
		serverError: null,
		data: action.data
	})),
  on(initCitiesAttrDataFailed, (state, action) => ({
    	...state,
    	loading: false,
    	loaded: true,
    	serverError: action.serverError,
    	data: []
    }))
);