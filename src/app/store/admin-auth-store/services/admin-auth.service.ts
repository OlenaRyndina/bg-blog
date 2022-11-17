import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AuthData } from '../store/admin-auth.reducer';
import { getAuthData } from '../store/admin-auth.selectors';

@Injectable({
    providedIn: 'root'
})
export class AdminAuthService {

    isAuth$ = this.store$.pipe(
        select(getAuthData),
        filter(authData => authData !== undefined),
        map(authData => !!authData)    
    );

    isGuest$ = this.isAuth$.pipe(
        map(isAuth => !isAuth)
    )

    constructor(
        private httpClient: HttpClient,
        private jwtHelperService: JwtHelperService,
        private store$: Store
    ) { }

    login(body: {login: string, password: string}): Observable<AuthData> {
        return this.httpClient.post<{accessToken: string}>(
            'http://localhost:3000/auth/login', 
            body
        ).pipe(
            map(res => ({
                ...res,
                ...this.jwtHelperService.decodeToken(res.accessToken)
                
            }))
        )
    }

    refresh(): Observable<AuthData> {
        return this.httpClient.post<{accessToken: string}>(
            'http://localhost:3000/auth/refresh',
            {}
        ).pipe(
            map(res => ({
                ...res,
                ...this.jwtHelperService.decodeToken(res.accessToken)
                
            }))
        )
    }    
}
