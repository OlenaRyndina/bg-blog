import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePageComponent,
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./routing/cities-attr/cities-attr.module')
                            .then(module => module.CitiesAttrModule)
                    }
                ]
            }
        ]),
    ]
})
export class HomeModule { }