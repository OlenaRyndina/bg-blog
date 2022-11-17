import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { HomePageComponent } from './pages/home-page/home-page.component';
/*import { LoginPageComponent } from '../admin-auth/pages/login-page/login-page.component';
*/import { AdminGuestGuard } from '../../guards/admin-guest.guard';
import { AdminAuthGuard } from '../../guards/admin-auth.guard';

 
@NgModule({
    declarations: [
        HomePageComponent,
/*        LoginPageComponent
*/    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: HomePageComponent,
                children: [

                ]
            }
        ])
    ],
    providers: [AdminGuestGuard, AdminAuthGuard]
})
export class HomeModule { }
