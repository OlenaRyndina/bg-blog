import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminRegService {

    constructor(
        private httpClient: HttpClient 
    ) { }

    singup(body: {login: string, password: string, nickName: string}) {
        return this.httpClient.post(
            'http://localhost:3000/registration',
            body)
    }

    checkLogin(login) {
        return this.httpClient.get(`http://localhost:3000/registration/login?login=${login}`)       
    }
}
