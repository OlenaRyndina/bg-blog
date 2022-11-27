import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { CitiesAttr } from '../../../../store/cities-attr-store/store/cities-attr.reducer';
import { initCitiesAttrData } from '../../../../store/cities-attr-store/store/cities-attr.actions';
import * as citiesAttrSelect from '../../../../store/cities-attr-store/store/cities-attr.selectors';

@Component({
  selector: 'app-cities-attr-block',
  templateUrl: './cities-attr-block.component.html',
  styleUrls: ['./cities-attr-block.component.scss']
})
export class CitiesAttrBlockComponent implements OnInit {

  citiesAttrData$: Observable<CitiesAttr[]> = this.store$.pipe(select(citiesAttrSelect.getCitiesAttrData));

  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.store$.dispatch(initCitiesAttrData())
  }
}
