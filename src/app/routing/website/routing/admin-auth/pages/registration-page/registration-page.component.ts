import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import * as adminReg from '../../../../../../store/admin-reg-store/store/admin-reg.selectors';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

    loaded$: Observable<boolean> = this.store$.pipe(select(adminReg.getLoaded));

    constructor(
        private store$: Store
    ) { }

    ngOnInit(): void {
    }

}
