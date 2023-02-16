import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { CommentsReducer, COMMENTS_DATA_FEATURE_NAME } from './store/comments.reducer';
import { CommentsEffects } from './store/comments.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(COMMENTS_DATA_FEATURE_NAME, CommentsReducer),
    EffectsModule.forFeature([CommentsEffects])
  ]
})

export class CommentsStoreModule { }
