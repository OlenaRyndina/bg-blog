import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType  } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { withLatestFrom, filter, switchMap, map, catchError } from 'rxjs/operators';

import { AdminMenuService } from '../services/admin-menu.service';
import { getLoaded, getLoading } from './admin-menu.selectors';
import { initMenu, initMenuFailed, initMenuSuccess } from './admin-menu.actions';

@Injectable()
export class AdminMenuEffects {
    
    saveAuthDataToLocalStorage$ = createEffect(() => this.actions$.pipe(
        ofType(initMenu),
        withLatestFrom(
            this.store$.pipe(select(getLoaded)),
            this.store$.pipe(select(getLoading)),
        ),
        filter(([_, loaded, loading]) => !loaded && loading),
        switchMap(() => this.adminMenuService.getMenu().pipe(
            map(data => initMenuSuccess({data})),
            catchError(error => of(
                initMenuFailed({serverError: error.serverError})
            ))
        ))
    ));


    constructor(
        private actions$: Actions,
        private adminMenuService: AdminMenuService,
        private store$: Store
    ){}
}
