import { 
    Component,  
    Input, 
    Output, 
    EventEmitter,
    OnChanges, 
    SimpleChanges, 
    ViewChild,
    TemplateRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { CitiesAttr } from '../../../../store/cities-attr-store/store/cities-attr.reducer';
import { CitiesAttrDialogComponent } from '../cities-attr-dialog/cities-attr-dialog.component';

@Component({
    selector: 'app-cities-attr-list',
    templateUrl: './cities-attr-list.component.html',
    styleUrls: ['./cities-attr-list.component.scss']
})
export class CitiesAttrListComponent implements OnChanges {

    @Input() citiesAttr: CitiesAttr[] = [];
    @Input() isAuth: boolean;
    @Output() editCityAttr = new EventEmitter<CitiesAttr>();

    @Input() formIsOpen: boolean;
    @Output() addCityAttr = new EventEmitter<CitiesAttr>();

    displayedColumns: string[] = ['cityName', 'nameCityAttractions', 'adress', 'phone', 'more'];
    dataSource: MatTableDataSource<CitiesAttr>;

    chosenRow;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    constructor(
        public dialog: MatDialog,
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        console.log(this.citiesAttr);
        this.dataSource = new MatTableDataSource(this.citiesAttr);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
  

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    openDialog(row) {
        const dialogRef = this.dialog.open(CitiesAttrDialogComponent, {
            width: '250px',
            data: row
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
        });
    }

    editAttr(row) {
        this.chosenRow = row.id;
        this.editCityAttr.emit(row);
    }

    addAttr() {
        this.addCityAttr.emit();
    }
}


