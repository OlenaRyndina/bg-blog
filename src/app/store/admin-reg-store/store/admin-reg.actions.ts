import { createAction, props } from '@ngrx/store';

export const registration = createAction(
	'[Admin Reg] singup',
	props<{login: string, password: string, nickName: string}>()
);

export const regSuccess = createAction('[Admin Reg] singup success');

export const regFailed = createAction(
	'[Admin Reg] singup failed',
	props<{serverError: string}>()
);