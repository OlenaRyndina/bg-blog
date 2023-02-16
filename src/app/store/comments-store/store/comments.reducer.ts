import { createReducer, on } from '@ngrx/store';

import { 
	  initCommentsData, 
	  initCommentsAttrDataSuccess, 
	  initCommentsAttrDataFailed,
	  editCommentsData,
	  editCommentsDataSuccess,
	  editCommentsDataFailed,
	  openFormCommentsData,
	  closeFormCommentsData,
	  addCommentsData,
	  addCommentsDataSuccess,
	  addCommentsDataFailed,
	  addLike } from './comments.actions';

export const COMMENTS_DATA_FEATURE_NAME = 'comments';

export interface Comment {
	  id?: number;
      author: string;
      replayToId: number;
	  text: string;
	  theme: string;
	  createdAt?: string;
	  updatedAt?: string;
	  like: string;
	  isLiked?: boolean;
}

export interface CommentDataState {
	  loading: boolean;
	  loaded: boolean;
	  formIsOpen: boolean;
	  serverError: string;
	  data?: any;
	  commentsAttrData?: any;
}

const initialState: CommentDataState = {
    loaded: false,
    loading: false,
    formIsOpen: false,
    serverError: '',
    data: [],
    commentsAttrData: []
};

export const CommentsReducer = createReducer(
	initialState,
	on(initCommentsData, state => state.loaded ? state : {
		...state,
		loading: true
	}),
	on(initCommentsAttrDataSuccess, (state, action) => ({
		...state,
		loading: false,
		loaded: true,
		serverError: null,
		commentsAttrData: action.data
	  })),
    on(initCommentsAttrDataFailed, (state, action) => ({
    	...state,
    	loading: false,
    	loaded: true,
    	serverError: action.serverError,
    	data: []
    })),
    on(openFormCommentsData, (state => ({
  	    ...state,
        formIsOpen: true
    }))),
    on(closeFormCommentsData, (state => ({
  	    ...state,
  	    formIsOpen: false
    }))),
    on(editCommentsData, state => state.loaded ? state : {
		    ...state,
		    loading: true
	  }),
	  on(editCommentsDataSuccess, (state, action) => ({
		    ...state,
		    loading: false,
		    loaded: true,
		    formIsOpen: false,
		    serverError: null,
		    data: action.data
	  })),
	  on(editCommentsDataFailed, (state, action) => ({
    	  ...state,
    	  loading: false,
    	  loaded: true,
    	  serverError: action.serverError,
    	  data: []
    })),
    on(addCommentsData, state => state.loaded ? state : {
		    ...state,
		    loading: true
	  }),
	  on(addCommentsDataSuccess, (state, action) => ({
		    ...state,
		    loading: false,
		    loaded: true,
		    formIsOpen: false,
		    serverError: null,
		    data: action.data
	  })),
	  on(addCommentsDataFailed, (state, action) => ({
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