import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { CurrencyConverterStoreModule } from '../../../store/currency-converter-store/currency-converter-store.module';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';

@NgModule({
  declarations: [CurrencyConverterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyConverterStoreModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [CurrencyConverterComponent]
})

export class CurrencyConverterModule { }


