import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { AdminLoginBlockModule } from '../../../../view/admin-login-block/admin-login-block.module';
import { AdminRegistrationBlockModule } from '../../../../view/admin-registration-block/admin-registration-block.module';

@NgModule({
    declarations: [
        LoginPageComponent,
        RegistrationPageComponent
    ],
    imports: [
        CommonModule,
        AdminLoginBlockModule,
        AdminRegistrationBlockModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login'
            },
            {
                path: 'login',
                component: LoginPageComponent
            },
            {
                path: 'registration',
                component: RegistrationPageComponent
            }
        ])
    ]
})


export class AdminAuthModule { }
