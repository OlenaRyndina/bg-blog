import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { CitiesAttr } from '../../../../store/cities-attr-store/store/cities-attr.reducer';

@Component({
  selector: 'app-cities-attr-dialog',
  templateUrl: './cities-attr-dialog.component.html',
  styleUrls: ['./cities-attr-dialog.component.scss']
})
export class CitiesAttrDialogComponent {
    
    constructor(
        public dialogRef: MatDialogRef<CitiesAttrDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public cityAttr: CitiesAttr
        ) { }
  
}



