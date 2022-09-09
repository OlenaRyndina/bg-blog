import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, EMPTY } from 'rxjs';
import { first, flatMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { getAccessToken } from '../store/admin-auth.selectors';

@Injectable()
export class AdminAuthInterceptor implements HttpInterceptor {

    constructor(
        private store$: Store
    ) {}

    intercept(
        request: HttpRequest<unknown>, 
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        return this.store$.pipe(
            select(getAccessToken),
            first(),
            flatMap(token => {
                const authRequest = token ? request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token}`
                    }
                }) : request;

                return next.handle(authRequest).pipe(
                    catchError(err => {
                        if (err instanceof HttpErrorResponse) {
                            if (err.status === 401) {
                                console.log('Redirect on login page or sign out');
                                return EMPTY;
                            }
                        }
                        throw err;
                    })
                );
            })
        );
    }
}
