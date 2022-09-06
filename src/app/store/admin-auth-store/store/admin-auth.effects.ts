import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { login, loginSuccess, loginFailed } from './admin-auth.actions';
import { AdminAuthService } from '../services/admin-auth.service';


@Injectable()
export class AdminAuthEffects {
    
    login$ = createEffect(() => this.actions$.pipe(
        ofType(login),
        switchMap(loginAction => this.adminAuthService.login({
            login: loginAction.login,
            password: loginAction.password
        }).pipe(
            map(loginSuccessData => loginSuccess(loginSuccessData)),
            catchError(
                error => of(loginFailed({
                	serverError: error.message
                }))
            )
        ))
    ));

    constructor(
        private actions$: Actions,
        private adminAuthService: AdminAuthService
    ){}
}
