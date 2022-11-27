import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { CitiesAttrBlockComponent } from './blocks/cities-attr-block/cities-attr-block.component';
import { CitiesAttrListComponent } from './ui/cities-attr-list/cities-attr-list.component';
import { CitiesAttrStoreModule } from '../../store/cities-attr-store/cities-attr-store.module';



@NgModule({
  declarations: [
    CitiesAttrBlockComponent,
    CitiesAttrListComponent
  ],
  imports: [
    CommonModule,
    CitiesAttrStoreModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
        CitiesAttrBlockComponent,
        CitiesAttrListComponent
    ]
})

export class CitiesAttrBlockModule { }

