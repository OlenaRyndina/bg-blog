
import { createAction, props } from '@ngrx/store';

export const initWeatherData = createAction(
    '[Weather Forecast] init'
);

export const initWeatherDataSuccess = createAction(
    '[Weather Forecast] init success',
    props<{data: any}>()
);

export const initWeatherDataFailed = createAction(
    '[Weather Forecast] init failed',
    props<{serverError: string}>()
);


export const geWeatherDataOfCurCity = createAction(
    '[Weather Forecast] get data success',
    props<{data: any}>()
)
