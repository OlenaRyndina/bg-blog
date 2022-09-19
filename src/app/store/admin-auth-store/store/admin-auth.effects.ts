import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType  } from '@ngrx/effects';
import { switchMap, map, catchError, delayWhen, first, filter, tap, skip, distinctUntilChanged } from 'rxjs/operators';
import { of, timer, fromEvent } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

import { login, loginSuccess, loginFailed } from './admin-auth.actions';
import { AdminAuthService } from '../services/admin-auth.service';
import { AuthData } from './admin-auth.reducer';
import { isAuth, getAuthData } from './admin-auth.selectors';
import { initAdminAuth, logoutSuccess, extractLoginData, logout } from './admin-auth.actions';

@Injectable()
export class AdminAuthEffects {
    
    login$ = createEffect(() => this.actions$.pipe(
        ofType(login),
        switchMap(loginAction => this.adminAuthService.login({
            login: loginAction.login,
            password: loginAction.password
        }).pipe(
            map(authData => loginSuccess({authData})),
            catchError(
                error => of(loginFailed({
                	serverError: error.message
                }))
            )
        ))
    ));

    refresh$ = createEffect(() => this.actions$.pipe(
        ofType(loginSuccess),
        switchMap(({ authData }) => timer(
                authData.exp * 1000 - 60 * 1000 - Date.now()
            )
        ),
        switchMap(() => this.store$.pipe(
            select(isAuth),
            first(),
            filter(isAdminAuth => isAdminAuth)
        )),
        switchMap(() => this.adminAuthService.refresh()),
        map(authData => loginSuccess({authData}))
    ))

    saveAuthDataToLocalStorage$ = createEffect(() => this.actions$.pipe(
        ofType(loginSuccess),
        tap( ({ authData }) => {

            localStorage.setItem('authData', JSON.stringify(authData))
        } )
    ), { dispatch: false } );

    extractLoginData$ = createEffect( () => this.actions$.pipe(
        ofType(initAdminAuth, extractLoginData),
        map(() => {
            const authDataString = localStorage.getItem('authData');
            if (!authDataString) {
                return logoutSuccess();
            }

            const authData = JSON.parse(authDataString);

            if ((authData.exp * 1000 - 10 * 1000 - Date.now()) < 0) {
                return logoutSuccess();
            }
            return loginSuccess({authData});
        })
    ));

    listenStorageEffect$ = createEffect(() => this.actions$.pipe(
        ofType(initAdminAuth),
        switchMap(() => fromEvent(window, 'storage')),
        map(() => extractLoginData())
    ));

    listenAuthorizeEffect$ = createEffect(() => this.actions$.pipe(
        ofType(initAdminAuth),
        switchMap(() => this.adminAuthService.isAuth$),
        distinctUntilChanged(),
        skip(1),
        tap(isAuthorized => {
            this.router.navigateByUrl(
                isAuthorized ? '/admin' : '/admin/auth/login'
            );
        })
    ), {dispatch: false});

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(logout),
        map(() => {
            localStorage.removeItem('authData');
            return logoutSuccess();
        })
    ));

    constructor(
        private actions$: Actions,
        private adminAuthService: AdminAuthService,
        private store$: Store,
        private router: Router
    ){}
}
