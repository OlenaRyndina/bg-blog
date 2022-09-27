import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { AdminMenuReducer, ADMIN_MENU_FEATURE_NAME } from './store/admin-menu.reducer';
import { AdminMenuEffects } from './store/admin-menu.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(ADMIN_MENU_FEATURE_NAME, AdminMenuReducer),
    HttpClientModule,
    EffectsModule.forFeature([AdminMenuEffects])
  ]
})
export class AdminMenuStoreModule { }
