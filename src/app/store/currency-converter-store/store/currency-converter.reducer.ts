import { createReducer, on } from '@ngrx/store';

import { 
	  initCurrencyData, 
	  initCurrencyDataSuccess, 
	  initCurrencyDataFailed
} from './currency-converter.actions';

export const CURRENCY_DATA_FEATURE_NAME = 'currency-converter';

export interface CurrencyDataState {
	  loading: boolean;
	  loaded: boolean;
	  serverError: string;
	  data: any;
}

const initialState: CurrencyDataState = {
    loaded: false,
    loading: false,
    serverError: '',
    data: []
};

export const CurrencyReducer = createReducer(
	initialState,
	on(initCurrencyData, state => state.loaded ? state : {
		...state,
		loading: true
	}),
	on(initCurrencyDataSuccess, (state, action) => ({
		...state,
		loading: false,
		loaded: true,
		serverError: null,
		data: action.data
	  })),
    on(initCurrencyDataFailed, (state, action) => ({
    	...state,
    	loading: false,
    	loaded: true,
    	serverError: action.serverError,
    	data: []
    }))
);