import {  createFeatureSelector, createSelector } from '@ngrx/store';

import {  CURRENCY_DATA_FEATURE_NAME, CurrencyDataState } from './currency-converter.reducer';

const getFeature = createFeatureSelector<CurrencyDataState>(CURRENCY_DATA_FEATURE_NAME);

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

export const getCurrencyData = createSelector(
    getFeature,
    state => state.data
);


