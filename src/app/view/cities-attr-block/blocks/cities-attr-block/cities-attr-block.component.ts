import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { CitiesAttr } from '../../../../store/cities-attr-store/store/cities-attr.reducer';
import { 
    initCitiesAttrData, 
    editCitiesAttrData, 
    openFormAttrData,
    closeFormAttrData,
    addCitiesAttrData
} from '../../../../store/cities-attr-store/store/cities-attr.actions';
import * as citiesAttrSelect from '../../../../store/cities-attr-store/store/cities-attr.selectors';
import { isAuth } from '../../../../store/admin-auth-store/store/admin-auth.selectors';
import { getFormIsOpen } from '../../../../store/cities-attr-store/store/cities-attr.selectors';


@Component({
    selector: 'app-cities-attr-block',
    templateUrl: './cities-attr-block.component.html',
    styleUrls: ['./cities-attr-block.component.scss']
})
export class CitiesAttrBlockComponent implements OnInit {

    citiesAttrData$: Observable<CitiesAttr[]> = this.store$.pipe(select(citiesAttrSelect.getCitiesAttrData));
    isAuth$: Observable<boolean> = this.store$.pipe(select(isAuth));
    getFormIsOpen$: Observable<boolean> = this.store$.pipe(select(getFormIsOpen));
    edCityAttr: CitiesAttr;
    formDirection: number;

    constructor(private store$: Store) { }

    ngOnInit(): void {
        this.store$.dispatch(initCitiesAttrData())
    }

    editAttr(attr) {
        this.edCityAttr = attr;
        this.store$.dispatch(openFormAttrData());
    }

    changeCoordY(coordY) {
        this.formDirection = coordY;
    }

    edCurrentAttr(curAttr) {
        this.store$.dispatch(editCitiesAttrData(curAttr))
    } 

    addAttr() {
        this.store$.dispatch(openFormAttrData());
    }

    addNewAttr(curAttr) {
        this.store$.dispatch(addCitiesAttrData(curAttr));
    }

    closeForm() {
        this.store$.dispatch(closeFormAttrData());
    }
}
