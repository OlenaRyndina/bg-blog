import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType  } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { registration, regSuccess, regFailed } from './admin-reg.actions';
import { AdminRegService } from '../services/admin-reg.service';

@Injectable()
export class AdminRegEffects {

	constructor(
        private actions$: Actions,
        private adminRegService: AdminRegService
	){}

	singup$ = createEffect(() => this.actions$.pipe(
        ofType(registration),
        switchMap(singupAction => this.adminRegService.singup({
        	login: singupAction.login,
        	password: singupAction.password,
        	nickName: singupAction.nickName
        }).pipe(
            map(singupSuccessData => regSuccess()),
            catchError(
            	error => {
                return of(regFailed({
            	    serverError: 'Что-то пошло не так :( Пожалуйста, плопробуйте позже'
                }))
            })
        ))
	));
}