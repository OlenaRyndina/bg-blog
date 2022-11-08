import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRegistrationFormUiComponent } from './ui/admin-registration-form-ui/admin-registration-form-ui.component';
import { AdminRegistrationBlockComponent } from './blocks/admin-registration-block/admin-registration-block.component';



@NgModule({
  declarations: [
    AdminRegistrationFormUiComponent,
    AdminRegistrationBlockComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
      AdminRegistrationBlockComponent
    ]
})
export class AdminRegistrationBlockModule { }
