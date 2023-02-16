
import { createAction, props } from '@ngrx/store';

import { Comment } from './comments.reducer';

export const initCommentsData = createAction(
    '[Comments] init'
);

export const initCommentsAttrDataSuccess = createAction(
    '[Comments] init success',
    props<{data: Comment[]}>()
);

export const initCommentsAttrDataFailed = createAction(
    '[Comments] init failed',
    props<{serverError: string}>()
);

export const editCommentsData = createAction(
    '[Comments] edit',
    props<{data: Comment}>()
);

export const openFormCommentsData = createAction(
    '[Comments] open form attrData'
);

export const closeFormCommentsData = createAction(
    '[Comments] close form attrData'
);

export const editCommentsDataSuccess = createAction(
    '[Comments] edit success',
    props<{data: Comment[]}>()
);

export const editCommentsDataFailed = createAction(
    '[Comments] edit failed',
    props<{serverError: string}>()
);

export const addCommentsData = createAction(
    '[Comments] add comment',
    props<{data: Comment}>()
)

export const addCommentsDataSuccess = createAction(
    '[Comments] add success',
    props<{data: Comment[]}>()
);

export const addCommentsDataFailed = createAction(
    '[Comments] add failed',
    props<{serverError: string}>()
);

export const addLike = createAction(
    '[Comments] plus like',
    props<{data: Comment}>()
);
