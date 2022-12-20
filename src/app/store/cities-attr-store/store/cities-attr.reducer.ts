import { createReducer, on } from '@ngrx/store';

import { 
	  initCitiesAttrData, 
	  initCitiesAttrDataSuccess, 
	  initCitiesAttrDataFailed,
	  editCitiesAttrData,
	  editCitiesAttrDataSuccess,
	  editCitiesAttrDataFailed,
	  openFormAttrData,
	  closeFormAttrData,
	  addCitiesAttrData,
	  addCitiesAttrDataSuccess,
	  addCitiesAttrDataFailed,
	  addLike } from './cities-attr.actions';

export const CITIES_ATTR_DATA_FEATURE_NAME = 'cities-attr';

export interface CitiesAttr {
	id?: number;
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
	isLiked?: boolean;
}

export interface CitiesAttrDataState {
	loading: boolean;
	loaded: boolean;
	formIsOpen: boolean;
	serverError: string;
	data?: any;
}

const initialState: CitiesAttrDataState = {
    loaded: false,
    loading: false,
    formIsOpen: false,
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
    })),
  on(openFormAttrData, (state => ({
  	  ...state,
      formIsOpen: true
  }))),
  on(closeFormAttrData, (state => ({
  	  ...state,
  	  formIsOpen: false
  }))),
  on(editCitiesAttrData, state => state.loaded ? state : {
		...state,
		loading: true
	}),
	on(editCitiesAttrDataSuccess, (state, action) => ({
		...state,
		loading: false,
		loaded: true,
		formIsOpen: false,
		serverError: null,
		data: action.data
	})),
	on(editCitiesAttrDataFailed, (state, action) => ({
    	...state,
    	loading: false,
    	loaded: true,
    	serverError: action.serverError,
    	data: []
  })),
  on(addCitiesAttrData, state => state.loaded ? state : {
		  ...state,
		  loading: true
	}),
	on(addCitiesAttrDataSuccess, (state, action) => ({
		  ...state,
		  loading: false,
		  loaded: true,
		  formIsOpen: false,
		  serverError: null,
		  data: action.data
	})),
	on(addCitiesAttrDataFailed, (state, action) => ({
    	...state,
    	loading: false,
    	loaded: true,
    	serverError: action.serverError,
    	data: []
  })),
  on(addLike, (state, action) => ({
  	...state,
  	data: action.data
  }))
);