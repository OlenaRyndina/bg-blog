import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [LikeComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [LikeComponent]
})

export class LikeModule { }
