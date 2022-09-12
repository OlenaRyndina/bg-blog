import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType  } from '@ngrx/effects';
import { switchMap, map, catchError, delayWhen, first, filter } from 'rxjs/operators';
import { of, timer } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { login, loginSuccess, loginFailed } from './admin-auth.actions';
import { AdminAuthService } from '../services/admin-auth.service';
import { AuthData } from './admin-auth.reducer';
import { isAuth } from './admin-auth.selectors';

@Injectable()
export class AdminAuthEffects {
    
    login$ = createEffect(() => this.actions$.pipe(
        ofType(login),
        switchMap(loginAction => this.adminAuthService.login({
            login: loginAction.login,
            password: loginAction.password
        }).pipe(
            map((loginSuccessData: AuthData) => loginSuccess(loginSuccessData)),
            catchError(
                error => of(loginFailed({
                	serverError: error.message
                }))
            )
        ))
    ));

    refresh$ = createEffect(() => this.actions$.pipe(
        ofType(loginSuccess),
        delayWhen((action: AuthData) => timer(
                action.exp * 1000 - 60 * 1000 - Date.now()
            )
        ),
        switchMap(() => this.store$.pipe(
            select(isAuth),
            first(),
            filter(isAdminAuth => isAdminAuth)
        )),
        switchMap(() => this.adminAuthService.refresh().pipe(
            map((loginSuccessData: AuthData) => loginSuccess(loginSuccessData))
        ))
    ))

    constructor(
        private actions$: Actions,
        private adminAuthService: AdminAuthService,
        private store$: Store
    ){}
}
