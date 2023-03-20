import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType  } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { withLatestFrom, filter, switchMap, map, catchError } from 'rxjs/operators';

import { CurrencyConverterService } from '../services/currency-converter.service';
import { getLoaded, getLoading } from './currency-converter.selectors';
import { 
    initCurrencyData, 
    initCurrencyDataSuccess, 
    initCurrencyDataFailed
} from './currency-converter.actions';

@Injectable()
export class CurrencyConverterEffects {

    constructor(
        private actions$: Actions,
        private currencyConverterService: CurrencyConverterService,
        private store$: Store
    ){}
    
    getCurrencyData$ = createEffect(() => this.actions$.pipe(
        ofType(initCurrencyData),
        withLatestFrom(
            this.store$.pipe(select(getLoaded)),
            this.store$.pipe(select(getLoading)),
        ),
        filter(([_, loaded, loading]) => !loaded && loading),
        switchMap(() => this.currencyConverterService.getCurrency()
            .then( data => {
                console.log(data);
                return initCurrencyDataSuccess({data})
            })
            .catch(error => initCurrencyDataFailed({serverError: error.serverError}))
        ))
    );
}

 


