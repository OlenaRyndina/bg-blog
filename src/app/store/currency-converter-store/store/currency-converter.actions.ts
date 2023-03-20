
import { createAction, props } from '@ngrx/store';

export const initCurrencyData = createAction(
    '[Currency Converter] init'
);

export const initCurrencyDataSuccess = createAction(
    '[Currency Converter] init success',
    props<{data: any}>()
);

export const initCurrencyDataFailed = createAction(
    '[Currency Converter] init failed',
    props<{serverError: string}>()
);

