import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Comment } from '../../../../../store/comments-store/store/comments.reducer';
import { AdminLikes } from '../../../../../store/admin-likes-store/store/admin-likes.reducer';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
    @Input() comment: Comment;
    @Input() replayToComment;
    @Input() isLiked: boolean;

    @Output() changeCurCommentLikes = new EventEmitter<AdminLikes>();
    @Output() replayToId = new EventEmitter<AdminLikes>();
    @Output() respondComment = new EventEmitter<any>();
    date;

    isFull: boolean = false;
    replay;
    
    openFullText() {
        this.isFull = !this.isFull;
    }

    countLike(curComment) {
      this.changeCurCommentLikes.emit(curComment);
    }

    saveComment(text) {       
        this.respondComment.emit(text);
        this.replay = undefined;
    }

    respond(comment) {
        console.log(comment);
        this.replay = comment.id;
        this.replayToId.emit(comment);
    }

    closeComment() {
        this.replay = undefined;
    }
}
