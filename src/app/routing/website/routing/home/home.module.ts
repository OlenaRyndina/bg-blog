import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';

import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        MatSliderModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: HomePageComponent
            }
        ])
    ]
})
export class HomeModule { }
