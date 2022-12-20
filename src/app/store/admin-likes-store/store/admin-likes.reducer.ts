import { createReducer, on } from '@ngrx/store';

import { 
	initAdminLikesData,
	initAdminLikesDataSuccess,
	editAdminLikesDataSuccess } from './admin-likes.actions';

export const ADMIN_LIKES_DATA_FEATURE_NAME = 'admin-likes';

export interface AdminLikes {
	id?: number;
    usersId: number;
	typeOfEntity: string;
	idsOfTypeOfEntity: number[];
}

export interface AdminLikesDataState {
	loading: boolean;
	loaded: boolean;
	serverError: string;
	data?: any;
}

const initialState: AdminLikesDataState = {
    loaded: false,
    loading: false,
    serverError: '',
    data: []
};

export const AdminLikesReducer = createReducer(
	initialState,
	on(initAdminLikesData, state => state.loaded ? state : {
		...state,
		loading: true
	}),
	on(initAdminLikesDataSuccess, (state, action) => ({
		...state,
		loading: false,
		loaded: true,
		serverError: null,
		data: action.data
	})),
	on(editAdminLikesDataSuccess, (state, action) => ({
		...state,
		loading: false,
		loaded: true,
		serverError: null,
		data: action.data
	})),
);

