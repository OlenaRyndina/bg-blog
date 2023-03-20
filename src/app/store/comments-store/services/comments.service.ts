import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Comment } from '../store/comments.reducer';

@Injectable({
  providedIn: 'root'
})

export class CommentsService {

    constructor(private httpClient: HttpClient) { }

    getCommentsCitiesAttr() {
        return this.httpClient.get<Comment[]>('http://localhost:3000/comments/city-attr');
    }

    editCommentsCityAttrData(comment) {
        console.log(comment);
        return this.httpClient.put<Comment>(`http://localhost:3000/comments/city-attr/${comment.id}`, comment);    
    }
    
    addCommentsCityAttrData(comment) {
        return this.httpClient.post<Comment>('http://localhost:3000/comments/city-attr', comment);
    }
}
