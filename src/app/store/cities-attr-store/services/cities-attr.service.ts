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

    editCityAttrData(attr) {
        return this.httpClient.put<CitiesAttr>(`http://localhost:3000/city-attr/${attr.id}`, attr);    
    }

    addCityAttrData(attr) {
        return this.httpClient.post<CitiesAttr>('http://localhost:3000/city-attr', attr);  
    }
}
