import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CurrencyConverterService {

    constructor(private httpClient: HttpClient) { }

    async getCurrency() {
        let currencyData;
        let myHeaders = new Headers();
        myHeaders.append("apikey", "642QLwhGdzxFt6r7m4IkD9gSUExTu3E1");

        let requestOptions = {
            method: 'GET',            
            headers: myHeaders
        };
                 
            await fetch("https://api.apilayer.com/fixer/latest?symbols=EUR%2C%20USD&base=UAH", requestOptions)
            .then(response => response.text())
            .then(result => {
                currencyData = result;
                console.log(currencyData)})
            .catch(error => console.log('error', error));
        
        return currencyData;
    }
}
