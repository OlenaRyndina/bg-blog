import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { AdminAuthReducer, ADMIN_AUTH_FEATURE_NAME } from './store/admin-auth.reducer';
import { AdminAuthEffects } from './store/admin-auth.effects';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
        StoreModule.forFeature(
            ADMIN_AUTH_FEATURE_NAME, 
            AdminAuthReducer
        ),
        EffectsModule.forFeature([AdminAuthEffects])
    ],
    exports: [
        
    ]
})
export class AdminAuthStoreModule { }
