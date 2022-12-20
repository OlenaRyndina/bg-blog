import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { AdminLikesReducer, ADMIN_LIKES_DATA_FEATURE_NAME } from './store/admin-likes.reducer';
import { AdminLikesEffects } from './store/admin-likes.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(ADMIN_LIKES_DATA_FEATURE_NAME, AdminLikesReducer),
    EffectsModule.forFeature([AdminLikesEffects])
  ]
})

export class AdminLikesStoreModule { }
