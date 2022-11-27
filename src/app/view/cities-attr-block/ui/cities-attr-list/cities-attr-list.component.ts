import { 
    Component,  
    Input, 
    OnChanges, 
    SimpleChanges, 
    ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { CitiesAttr } from '../../../../store/cities-attr-store/store/cities-attr.reducer';

/*cityName: string;
  cityAttractions: string;
  nameCityAttractions: string;
  adress: string;
  phone: string;
  site: string;
  workHours: string;
  ticketPrice: string;
  coordX: string;
  coordY: string;
  like: number;*/


@Component({
    selector: 'app-cities-attr-list',
    templateUrl: './cities-attr-list.component.html',
    styleUrls: ['./cities-attr-list.component.scss']
})
export class CitiesAttrListComponent implements OnChanges {

    @Input() citiesAttr: CitiesAttr[] = [];

    displayedColumns: string[] = ['cityName', 'nameCityAttractions', 'adress', 'phone', 'more'];
    dataSource: MatTableDataSource<CitiesAttr>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    constructor() {
    
    }

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
}


