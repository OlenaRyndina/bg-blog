import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule }   from '@angular/forms';

import { CitiesAttrBlockComponent } from './blocks/cities-attr-block/cities-attr-block.component';
import { CitiesAttrListComponent } from './ui/cities-attr-list/cities-attr-list.component';
import { CitiesAttrStoreModule } from '../../store/cities-attr-store/cities-attr-store.module';
import { CitiesAttrDialogComponent } from './ui/cities-attr-dialog/cities-attr-dialog.component';
import { CitiesAttrFormComponent } from './ui/cities-attr-form/cities-attr-form.component';
import { MessageComponent } from '../ui/message/message.component';


@NgModule({
  declarations: [
    CitiesAttrBlockComponent,
    CitiesAttrListComponent,
    CitiesAttrDialogComponent,
    CitiesAttrFormComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    CitiesAttrStoreModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
        CitiesAttrBlockComponent,
        CitiesAttrListComponent,
        MessageComponent
    ]
})

export class CitiesAttrBlockModule { }

