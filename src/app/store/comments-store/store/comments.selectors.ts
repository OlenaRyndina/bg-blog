import {  createFeatureSelector, createSelector } from '@ngrx/store';

import {  COMMENTS_DATA_FEATURE_NAME, CommentDataState } from './comments.reducer';

const getFeature = createFeatureSelector<CommentDataState>(COMMENTS_DATA_FEATURE_NAME);

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

export const getCommentsAttrData = createSelector(
    getFeature,
    state => state.commentsAttrData
);

export const getFormIsOpen = createSelector(
    getFeature,
    state => state.formIsOpen
); 