import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { CitiesAttr } from '../../../../store/cities-attr-store/store/cities-attr.reducer';
import { AdminLikes } from '../../../../store/admin-likes-store/store/admin-likes.reducer';

import { 
    initCitiesAttrData, 
    editCitiesAttrData, 
    openFormAttrData,
    closeFormAttrData,
    addCitiesAttrData,
    addLike
} from '../../../../store/cities-attr-store/store/cities-attr.actions';
import { 
    initAdminLikesData,
    editAdminLikesData 
} from '../../../../store/admin-likes-store/store/admin-likes.actions';

import * as citiesAttrSelect from '../../../../store/cities-attr-store/store/cities-attr.selectors';
import * as adminLikesSelect from '../../../../store/admin-likes-store/store/admin-likes.selectors';

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
    citiesFilteredAttrData: CitiesAttr[];
    curChangedCityAttr: CitiesAttr;

    likesData$: Observable<void> = this.store$.pipe(select(adminLikesSelect.getAdminLikesData));

    constructor(private store$: Store) { }

    ngOnInit(): void {
        this.store$.dispatch(initCitiesAttrData());
        this.store$.dispatch(initAdminLikesData());
    }

    editAttr(attr) {
        this.edCityAttr = attr;
        this.store$.dispatch(openFormAttrData());
    }

    changeCoordY(coordY) {
        this.formDirection = coordY;
    }

    edCurrentAttr(curAttr) {
        this.store$.dispatch(editCitiesAttrData(curAttr));
        this.curChangedCityAttr = curAttr;
    } 

    addAttr() {
        this.store$.dispatch(openFormAttrData());
    }

    addNewAttr(curAttr) {
        this.store$.dispatch(addCitiesAttrData(curAttr));
        this.curChangedCityAttr = curAttr;
    }

    closeForm() {
        this.store$.dispatch(closeFormAttrData());
    }

    changeFilteredList(filteredList) {
        if (filteredList) {
            this.citiesFilteredAttrData = filteredList;
        }
    }

    likeCount(curAttr) {
        console.log(curAttr);
        this.store$.dispatch(addLike(curAttr));
    }

    changeLikes(curLikes) {
        console.log(curLikes);
        this.store$.dispatch(editAdminLikesData(curLikes));
    }
}
