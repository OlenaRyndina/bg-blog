import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType  } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { withLatestFrom, filter, switchMap, map, catchError } from 'rxjs/operators';

import { CitiesAttrService } from '../services/cities-attr.service';
import { getLoaded, getLoading } from './cities-attr.selectors';
import { 
    initCitiesAttrData, 
    initCitiesAttrDataSuccess, 
    initCitiesAttrDataFailed,
    editCitiesAttrData,
    editCitiesAttrDataSuccess,
    editCitiesAttrDataFailed } from './cities-attr.actions';

@Injectable()
export class CitiesAttrEffects {

    constructor(
        private actions$: Actions,
        private citiesAttrService: CitiesAttrService,
        private store$: Store
    ){}
    
    saveCitiesAttrDataToLocalStorage$ = createEffect(() => this.actions$.pipe(
        ofType(initCitiesAttrData),
        withLatestFrom(
            this.store$.pipe(select(getLoaded)),
            this.store$.pipe(select(getLoading)),
        ),
        filter(([_, loaded, loading]) => !loaded && loading),
        switchMap(() => this.citiesAttrService.getCitiesAttr().pipe(
            map(data => initCitiesAttrDataSuccess({data})),
            catchError(error => of(
                initCitiesAttrDataFailed({serverError: error.serverError})
            ))
        ))
    ));

    editCitiesAttrData$ = createEffect(() => this.actions$.pipe(
        ofType(editCitiesAttrData),
        switchMap(data => this.citiesAttrService.editCityAttrData(data)),
        switchMap(() => this.citiesAttrService.getCitiesAttr().pipe(
            map(data => editCitiesAttrDataSuccess({data})),
            catchError(error => of(
                editCitiesAttrDataFailed({serverError: error.serverError})
            ))
        ))    
    ))
}
