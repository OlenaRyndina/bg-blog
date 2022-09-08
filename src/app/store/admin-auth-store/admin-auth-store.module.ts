import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { JwtModule } from '@auth0/angular-jwt';

import { AdminAuthReducer, ADMIN_AUTH_FEATURE_NAME } from './store/admin-auth.reducer';
import { AdminAuthEffects } from './store/admin-auth.effects';
import { AdminAuthInterceptor } from './interceptors/admin-auth.interceptor';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: request => request as any
            }
        }),
        StoreModule.forFeature(
            ADMIN_AUTH_FEATURE_NAME, 
            AdminAuthReducer
        ),
        EffectsModule.forFeature([AdminAuthEffects])
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AdminAuthInterceptor,
            multi: true
        }
    ]
})
export class AdminAuthStoreModule { }
