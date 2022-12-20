import { createAction, props } from '@ngrx/store';

import { AdminLikes } from './admin-likes.reducer';

export const initAdminLikesData = createAction(
    '[Admin Likes] init',
);

export const initAdminLikesDataSuccess = createAction(
    '[Admin Likes] init success',
    props<{data: AdminLikes[]}>()
);

export const initAdminLikesDataFailed = createAction(
    '[Admin Likes] init failed',
    props<{serverError: string}>()
);

export const editAdminLikesData = createAction(
    '[Admin Likes] edit',
    props<{data: AdminLikes}>()
);

export const editAdminLikesDataSuccess = createAction(
    '[Admin Likes] edit success',
    props<{data: AdminLikes[]}>()
);

export const editAdminLikesDataFailed = createAction(
    '[Admin Likes] edit failed',
    props<{serverError: string}>()
);