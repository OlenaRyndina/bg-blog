import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule }   from '@angular/forms';

import { CitiesAttrBlockComponent } from './blocks/cities-attr-block/cities-attr-block.component';
import { CitiesAttrListComponent } from './ui/cities-attr-list/cities-attr-list.component';
import { CitiesAttrStoreModule } from '../../store/cities-attr-store/cities-attr-store.module';
import { AdminLikesStoreModule } from '../../store/admin-likes-store/admin-likes-store.module';
import { CitiesAttrDialogComponent } from './ui/cities-attr-dialog/cities-attr-dialog.component';
import { CitiesAttrFormComponent } from './ui/cities-attr-form/cities-attr-form.component';
import { MessageComponent } from '../ui/message/message.component';
import { LikeComponent } from '../ui/like/like.component';
import { CitiesAttrFilterComponent } from './ui/cities-attr-filter/cities-attr-filter.component';


@NgModule({
  declarations: [
    CitiesAttrBlockComponent,
    CitiesAttrListComponent,
    CitiesAttrDialogComponent,
    CitiesAttrFormComponent,
    MessageComponent,
    LikeComponent,
    CitiesAttrFilterComponent
  ],
  imports: [
    CommonModule,
    CitiesAttrStoreModule,
    AdminLikesStoreModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
        CitiesAttrBlockComponent,
        CitiesAttrListComponent,
        MessageComponent,
        LikeComponent
    ]
})

export class CitiesAttrBlockModule { }

