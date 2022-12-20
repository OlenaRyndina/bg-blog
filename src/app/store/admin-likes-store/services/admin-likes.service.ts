import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AdminLikes } from '../store/admin-likes.reducer';

@Injectable({
  providedIn: 'root'
})
export class AdminLikesService {

    constructor(private httpClient: HttpClient) { }

    getAdminLikes(id) {
        return this.httpClient.get<AdminLikes[]>(`http://localhost:3000/users-likes/${id}`);
    }

    editAdminLikesData(adminLikes) {
        return this.httpClient.put<AdminLikes>(`http://localhost:3000/users-likes/${adminLikes.id}`, adminLikes);    
    }
}

