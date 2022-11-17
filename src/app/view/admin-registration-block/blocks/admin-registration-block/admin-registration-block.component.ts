import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AdminRegService } from '../../../../store/admin-reg-store/services/admin-reg.service';
import * as adminReg from '../../../../store/admin-reg-store/store/admin-reg.selectors';
import { registration } from '../../../../store/admin-reg-store/store/admin-reg.actions';

@Component({
    selector: 'app-admin-registration-block',
    templateUrl: './admin-registration-block.component.html',
    styleUrls: ['./admin-registration-block.component.scss']
})
export class AdminRegistrationBlockComponent {
    loginIsFree;
    isShow = true;

    loading$: Observable<boolean> = this.store$.pipe(select(adminReg.getLoading));
    loaded$: Observable<boolean> = this.store$.pipe(select(adminReg.getLoaded));
    serverError$: Observable<boolean> = this.store$.pipe(select(adminReg.getServerError));

    constructor(
        private adminRegService: AdminRegService,
        private store$: Store
    ) {  }

    onSignup(signupPayload: {login: string, password: string, nickName: string}) {
        this.store$.dispatch(registration(signupPayload));
        /*this.adminRegService.singup(loginPayload).subscribe(res => console.log(res));*/
    }

    onCheckLogin(login) {
        this.adminRegService.checkLogin(login).subscribe(res => this.loginIsFree = res);
    }

    /*onLogin(loginPayload: {login: string, password: string}) {
        this.store$.dispatch(login(loginPayload));
    }*/
}
