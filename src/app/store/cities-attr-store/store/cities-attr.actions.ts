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

export const editCitiesAttrData = createAction(
    '[Cities Attr] edit',
    props<{data: CitiesAttr}>()
);

export const openFormAttrData = createAction(
    '[Cities Attr] open form attrData'
);

export const closeFormAttrData = createAction(
    '[Cities Attr] close form attrData'
);

export const editCitiesAttrDataSuccess = createAction(
    '[Cities Attr] edit success',
    props<{data: CitiesAttr[]}>()
);

export const editCitiesAttrDataFailed = createAction(
    '[Cities Attr] edit failed',
    props<{serverError: string}>()
);

export const addCitiesAttrData = createAction(
    '[Cities Attr] add attrData',
    props<{data: CitiesAttr}>()
)

export const addCitiesAttrDataSuccess = createAction(
    '[Cities Attr] add success',
    props<{data: CitiesAttr[]}>()
);

export const addCitiesAttrDataFailed = createAction(
    '[Cities Attr] add failed',
    props<{serverError: string}>()
);

export const addLike = createAction(
    '[Cities Attr] plus like',
    props<{data: CitiesAttr}>()
);
