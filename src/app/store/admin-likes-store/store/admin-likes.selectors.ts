import {  createFeatureSelector, createSelector } from '@ngrx/store';

import {  ADMIN_LIKES_DATA_FEATURE_NAME, AdminLikesDataState } from './admin-likes.reducer';

const getFeature = createFeatureSelector<AdminLikesDataState>(ADMIN_LIKES_DATA_FEATURE_NAME);

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

export const getAdminLikesData = createSelector(
    getFeature,
    state => state.data
);

