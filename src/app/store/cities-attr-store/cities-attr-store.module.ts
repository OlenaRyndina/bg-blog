import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { CitiesAttrReducer, CITIES_ATTR_DATA_FEATURE_NAME } from './store/cities-attr.reducer';
import { CitiesAttrEffects } from './store/cities-attr.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(CITIES_ATTR_DATA_FEATURE_NAME, CitiesAttrReducer),
    EffectsModule.forFeature([CitiesAttrEffects])
  ]
})

export class CitiesAttrStoreModule { }
