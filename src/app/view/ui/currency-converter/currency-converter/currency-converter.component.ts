import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { 
    initCurrencyData
} from '../../../../store/currency-converter-store/store/currency-converter.actions';
import * as currencySelect from '../../../../store/currency-converter-store/store/currency-converter.selectors';

@Component({
    selector: 'app-currency-converter',
    templateUrl: './currency-converter.component.html',
    styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

    currencyData; 
    rates = [{name: 'UAH', value: '1'}];
    currencyNames = ['UAH'];    
    currencyFrom = 'UAH';
    currencyTo = 'UAH';
    convertValueFrom;
    convertResult;

    constructor(private store$: Store) { }

    ngOnInit(): void {
        this.store$.dispatch(initCurrencyData());

        this.store$.pipe(
            select(currencySelect.getCurrencyData)
        ).subscribe(data => {
            this.currencyData = JSON.parse(data).rates;
            for (let key in this.currencyData) {
                let obj = {name: '', value: ''};
                obj.name = key;
                obj.value = (1 / this.currencyData[key]).toFixed(2);
                this.rates.push(obj);
                this.currencyNames.push(key);
            }
        });       
    }

    convertValue() {
        let rateCurFrom, rateCurTo;

        if (this.convertValueFrom) {
            this.rates.forEach(rate => { 
                rate.name === this.currencyFrom ? rateCurFrom = rate.value : false; 
                rate.name === this.currencyTo ? rateCurTo = rate.value : false;
            })
            this.convertResult = (this.convertValueFrom * rateCurFrom / rateCurTo).toFixed(2);
        }       
    }
}
