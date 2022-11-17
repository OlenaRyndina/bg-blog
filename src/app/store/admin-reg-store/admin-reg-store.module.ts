import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { ADMIN_REG_FEATURE_NAME, adminRegReducer } from './store/admin-reg.reducer';
import { AdminRegEffects } from './store/admin-reg.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(
        ADMIN_REG_FEATURE_NAME, 
        adminRegReducer
    ),
    EffectsModule.forFeature(
        [AdminRegEffects]
    )
  ]
})
export class AdminRegStoreModule { }
