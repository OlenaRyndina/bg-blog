import { createReducer, on } from '@ngrx/store';

import { initMenu, initMenuSuccess, initMenuFailed } from './admin-menu.actions';
import { logoutSuccess } from '../../admin-auth-store/store/admin-auth.actions';

export const ADMIN_MENU_FEATURE_NAME = 'admin-menu';

export interface NestedTreeNode {
  name: string;
  href?: string;
  icon?: string;
  children?: NestedTreeNode[];
}

export interface AdminMenuState {
	loading: boolean;
	loaded: boolean;
	serverError: string;
	data?: any;
}

const initialState: AdminMenuState = {
    loaded: false,
    loading: false,
    serverError: '',
    data: []
};

export const AdminMenuReducer = createReducer(
	initialState,
	on(initMenu, state => state.loaded ? state : {
		...state,
		loading: true
	}),
	on(initMenuSuccess, (state, action) => ({
		...state,
		loading: false,
		loaded: true,
		serverError: null,
		data: action.data
	})),
    on(initMenuFailed, (state, action) => ({
    	...state,
    	loading: false,
    	loaded: true,
    	serverError: action.serverError,
    	data: []
    })),
    on(logoutSuccess, () => initialState)
);