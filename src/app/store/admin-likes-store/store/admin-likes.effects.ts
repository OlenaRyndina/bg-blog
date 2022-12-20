import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType  } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { withLatestFrom, filter, switchMap, map, catchError } from 'rxjs/operators';

import { AdminLikesService } from '../services/admin-likes.service';
import { getLoaded, getLoading } from './admin-likes.selectors';
import { getAuthData } from '../../admin-auth-store/store/admin-auth.selectors';
import { 
    initAdminLikesData, 
    initAdminLikesDataSuccess,
    initAdminLikesDataFailed,
    editAdminLikesData,
    editAdminLikesDataSuccess,
    editAdminLikesDataFailed
     } from './admin-likes.actions';

@Injectable()
export class AdminLikesEffects {
    adminId; 
    authData$ = this.store$.pipe(select(getAuthData)).subscribe(value => this.adminId = value.id);

    constructor(
        private actions$: Actions,
        private adminLikesService: AdminLikesService,
        private store$: Store
    ){}
    
    saveAdminLikesDataToLocalStorage$ = createEffect(() => this.actions$.pipe(
        ofType(initAdminLikesData),
        withLatestFrom(
            this.store$.pipe(select(getLoaded)),
            this.store$.pipe(select(getLoading))
        ),
        filter(([_, loaded, loading]) => !loaded && loading),
        switchMap(() => this.adminLikesService.getAdminLikes(this.adminId).pipe(
            map(data => initAdminLikesDataSuccess({data})),
            catchError(error => of(
                initAdminLikesDataFailed({serverError: error.serverError})
            ))
        ))
    ));

    editAdminLikesData$ = createEffect(() => this.actions$.pipe(
        ofType(editAdminLikesData),
        switchMap(data => this.adminLikesService.editAdminLikesData(data)),
        switchMap(() => this.adminLikesService.getAdminLikes(this.adminId).pipe(
            map(data => editAdminLikesDataSuccess({data})),
            catchError(error => of(
                editAdminLikesDataFailed({serverError: error.serverError})
            ))
        ))    
    ));
} 

