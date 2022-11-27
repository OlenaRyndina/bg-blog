import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CitiesAttrBlockModule } from '../../../../../../view/cities-attr-block/cities-attr-block.module';
import { CitiesAttrComponent } from './pages/cities-attr/cities-attr.component';

@NgModule({
    declarations: [
        CitiesAttrComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CitiesAttrComponent
            }
        ]),
        CitiesAttrBlockModule
    ],
    
})
export class CitiesAttrModule { }


