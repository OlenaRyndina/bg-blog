import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { CitiesAttr } from '../../../../store/cities-attr-store/store/cities-attr.reducer';
import { initCitiesAttrData, editCitiesAttrData } from '../../../../store/cities-attr-store/store/cities-attr.actions';
import * as citiesAttrSelect from '../../../../store/cities-attr-store/store/cities-attr.selectors';
import { isAuth } from '../../../../store/admin-auth-store/store/admin-auth.selectors';


@Component({
    selector: 'app-cities-attr-block',
    templateUrl: './cities-attr-block.component.html',
    styleUrls: ['./cities-attr-block.component.scss']
})
export class CitiesAttrBlockComponent implements OnInit {

    citiesAttrData$: Observable<CitiesAttr[]> = this.store$.pipe(select(citiesAttrSelect.getCitiesAttrData));
    isAuth$: Observable<boolean> = this.store$.pipe(select(isAuth));
    edCityAttr: CitiesAttr;

    constructor(private store$: Store) { }

    ngOnInit(): void {
        this.store$.dispatch(initCitiesAttrData())
    }

    editAttr(attr) {
        this.edCityAttr = attr;
    }

    edCurrentAttr(curAttr) {
        this.store$.dispatch(editCitiesAttrData(curAttr))
    }
}
