import {  createFeatureSelector, createSelector } from '@ngrx/store';

import {  CITIES_ATTR_DATA_FEATURE_NAME, CitiesAttrDataState } from './cities-attr.reducer';

const getFeature = createFeatureSelector<CitiesAttrDataState>(CITIES_ATTR_DATA_FEATURE_NAME);

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

export const getCitiesAttrData = createSelector(
    getFeature,
    state => state.data
);
