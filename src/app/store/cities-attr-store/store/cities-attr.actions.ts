import { createAction, props } from '@ngrx/store';

import { CitiesAttr } from './cities-attr.reducer';

export const initCitiesAttrData = createAction(
    '[Cities Attr] init'
);

export const initCitiesAttrDataSuccess = createAction(
    '[Cities Attr] init success',
    props<{data: CitiesAttr[]}>()
);

export const initCitiesAttrDataFailed = createAction(
    '[Cities Attr] init failed',
    props<{serverError: string}>()
);

