import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as adminAuth from '../../../../store/admin-auth-store/store/admin-auth.selectors';
import { login } from '../../../../store/admin-auth-store/store/admin-auth.actions';

@Component({
    selector: 'app-admin-login-block',
    templateUrl: './admin-login-block.component.html',
    styleUrls: ['./admin-login-block.component.scss']
})
export class AdminLoginBlockComponent implements OnInit {

    loading$: Observable<boolean> = this.store$.pipe(select(adminAuth.getLoading));
    loaded$: Observable<boolean> = this.store$.pipe(select(adminAuth.getLoaded));
    serverError$: Observable<any> = this.store$.pipe(select(adminAuth.getServerError));;

    serverError = '';

    constructor(
        private store$: Store,
        private httpClient: HttpClient
    ) { }

    ngOnInit(): void {
    }

    onLogin(loginPayload: {login: string, password: string}) {
        this.store$.dispatch(login(loginPayload));
    }

    testProfile() {
        this.httpClient.get('http://localhost:3000/auth/profile')
            .subscribe(console.log);
    }

}
