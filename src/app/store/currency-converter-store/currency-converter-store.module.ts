import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { CurrencyReducer, CURRENCY_DATA_FEATURE_NAME } from './store/currency-converter.reducer';
import { CurrencyConverterEffects } from './store/currency-converter.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(CURRENCY_DATA_FEATURE_NAME, CurrencyReducer),
    EffectsModule.forFeature([CurrencyConverterEffects])
  ]
})

export class CurrencyConverterStoreModule { }

