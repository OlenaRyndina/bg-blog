import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ADMIN_REG_FEATURE_NAME, AdminRegState } from './admin-reg.reducer';

const getFeature = createFeatureSelector<AdminRegState>(ADMIN_REG_FEATURE_NAME);

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