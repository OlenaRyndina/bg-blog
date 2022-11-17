import { createReducer, on } from '@ngrx/store';

export const ADMIN_REG_FEATURE_NAME = 'admin-reg';
import { registration, regSuccess, regFailed } from './admin-reg.actions';

export interface AdminRegState {
	loading: boolean;
	loaded: boolean;
	serverError: boolean;
}

const initialState: AdminRegState = {
    loaded: false,
    loading: false,
    serverError: false
}; 

export const adminRegReducer = createReducer(initialState,
    on(registration, state => ({
    	...state,
    	loading: true
    })),
    on(regSuccess, state => ({
    	...state,
    	loaded: true,
    	loading: false,
    	serverError: false
    })),
    on(regFailed, state => ({
    	...state,
    	loaded: false,
    	loading: false,
    	serverError: true
    }))
);