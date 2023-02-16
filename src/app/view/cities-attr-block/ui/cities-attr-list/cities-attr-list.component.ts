import { 
    Component,  
    Input, 
    Output, 
    EventEmitter,
    OnChanges, 
    SimpleChanges, 
    ViewChild,
    ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { CitiesAttr } from '../../../../store/cities-attr-store/store/cities-attr.reducer';
import { CitiesAttrDialogComponent } from '../cities-attr-dialog/cities-attr-dialog.component';

import { AdminLikes } from '../../../../store/admin-likes-store/store/admin-likes.reducer';

@Component({
    selector: 'app-cities-attr-list',
    templateUrl: './cities-attr-list.component.html',
    styleUrls: ['./cities-attr-list.component.scss']
})
export class CitiesAttrListComponent implements OnChanges {

    @Input() citiesAttr: CitiesAttr[] = [];
    @Input() isAuth: boolean;
    @Output() editCityAttr = new EventEmitter<CitiesAttr>();
    @Output() coordY = new EventEmitter<number>();

    @Input() curChangedAttr: CitiesAttr;

    @Input() formIsOpen: boolean;
    @Output() addCityAttr = new EventEmitter<CitiesAttr>();

    @Input() filteredListAttr: CitiesAttr[];

    @Output() likeAttr = new EventEmitter<any>();
    @Input() likes;

    @Output() changeAttrLikes = new EventEmitter<AdminLikes>();

    displayedColumns: string[] = ['cityName', 'nameCityAttractions', 'adress', 'phone', 'more', 'like'];
    dataSource: MatTableDataSource<CitiesAttr>;

    chosenRow;
    allCitiesAttr: CitiesAttr[];
    isShowAll: boolean = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    curLikes: AdminLikes;
    idsOfLikesAttr: any[];


    constructor(
        public dialog: MatDialog
    ) {}

    private showData() {
        this.dataSource = new MatTableDataSource(this.allCitiesAttr);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.filteredListAttr) {
            this.allCitiesAttr = this.filteredListAttr;
            this.isShowAll = true;
        } else {
            this.allCitiesAttr = this.citiesAttr;
        }

        if (this.curChangedAttr && this.filteredListAttr) {
            this.allCitiesAttr.forEach((cityAttr, idx, arr) => {
            if (cityAttr.id === this.curChangedAttr.id) {
                arr.splice(idx, 1, this.curChangedAttr);
            } 
        })
            this.curChangedAttr = undefined;
        }

        this.showData();
        this.curLikes = this.likes.find(like => like.typeOfEntity === 'CityAttractions');
        this.idsOfLikesAttr = this.curLikes?.idsOfTypeOfEntity;
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

    editAttr(row, tableRow) {
        let coordY = tableRow.parentElement.getBoundingClientRect().bottom;
        this.chosenRow = row.id;
        this.editCityAttr.emit(row);
        this.coordY.emit(coordY);
    }

    addAttr() {
        this.chosenRow = undefined;
        this.addCityAttr.emit();
    }

    showAll() {
        this.allCitiesAttr = this.citiesAttr;
        this.showData();
        this.isShowAll = false;
        this.filteredListAttr = undefined;
    }
 
    findLike(row) {
        return this.idsOfLikesAttr?.find(item => +item === +row.id ? true : false );
    }

    countLike(e) {
        
        let curAttr = {...this.allCitiesAttr.find(cityAttr => cityAttr.id === e.id)};
        let curAttrLikes = {...this.curLikes};
        let curIdsOfLikesAttr = [...this.idsOfLikesAttr];

      if (e.isLiked) {
            curIdsOfLikesAttr.push(curAttr.id);
        } else {
            curIdsOfLikesAttr = curIdsOfLikesAttr.filter(idx => {
                return +idx !== +curAttr.id;
            });
        }

        curAttr.like = e.like;
        curAttrLikes.idsOfTypeOfEntity = curIdsOfLikesAttr;

        this.likeAttr.emit(curAttr);
        this.changeAttrLikes.emit(curAttrLikes);
    }
}


