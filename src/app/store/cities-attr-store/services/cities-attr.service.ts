import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CitiesAttr } from '../store/cities-attr.reducer';

@Injectable({
  providedIn: 'root'
})

export class CitiesAttrService {

  constructor(private httpClient: HttpClient) { }

  getCitiesAttr() {
    return this.httpClient.get<CitiesAttr[]>('http://localhost:3000/city-attr');
  }
}
