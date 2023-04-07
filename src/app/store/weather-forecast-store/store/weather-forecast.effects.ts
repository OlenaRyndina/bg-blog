import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType  } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { withLatestFrom, filter, switchMap, map, catchError } from 'rxjs/operators';

import { WeatherForecastService } from '../services/weather-forecast.service';
import { getLoaded, getLoading } from './weather-forecast.selectors';
import { 
    initWeatherData, 
    initWeatherDataSuccess, 
    initWeatherDataFailed,
    geWeatherDataOfCurCity
} from './weather-forecast.actions';

@Injectable()
export class WeatherForecastEffects {

    constructor(
        private actions$: Actions,
        private weatherForecastService: WeatherForecastService,
        private store$: Store
    ){}
    
    getWeatherData$ = createEffect(() => this.actions$.pipe(
        ofType(initWeatherData),
        withLatestFrom(
            this.store$.pipe(select(getLoaded)),
            this.store$.pipe(select(getLoading)),
        ),
        filter(([_, loaded, loading]) => !loaded && loading),
        switchMap((data) => this.weatherForecastService.getInitCityWeaterForecast().pipe(
                map(data => initWeatherDataSuccess({data})),
                catchError(error => of(
                    initWeatherDataFailed({serverError: error.serverError})
                ))
            )
        ))
    );

    geWeatherDataOfCurCity$ = createEffect(() => this.actions$.pipe(
        ofType(geWeatherDataOfCurCity),
        switchMap(data => this.weatherForecastService.getWeatherForecast(data.data).pipe(
            map(data => initWeatherDataSuccess({data})),
            catchError(error => of(
                initWeatherDataFailed({serverError: error.serverError})
            ))
        )),
        
    ));
}
 

 


