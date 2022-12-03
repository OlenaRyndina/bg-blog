import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CitiesAttrBlockModule } from '../../../../../../view/cities-attr-block/cities-attr-block.module';



@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        CitiesAttrBlockModule,
        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent
            }
        ])
    ]
})

export class DashboardModule { }
