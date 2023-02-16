import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Comment } from '../../../../../store/comments-store/store/comments.reducer';
import { CommentModel } from '../../../../../store/comments-store/models/Comment.model';
import { 
    initCommentsData,
    addCommentsData,
    addLike
} from '../../../../../store/comments-store/store/comments.actions';

import { 
    initAdminLikesData,
    editAdminLikesData 
} from '../../../../../store/admin-likes-store/store/admin-likes.actions';

import * as commentsSelect from '../../../../../store/comments-store/store/comments.selectors';
import * as adminLikesSelect from '../../../../../store/admin-likes-store/store/admin-likes.selectors';
import * as adminInfoSelect from '../../../../../store/admin-auth-store/store/admin-auth.selectors';

import { AdminLikes } from '../../../../../store/admin-likes-store/store/admin-likes.reducer';
import { Message } from '../../../message/ui/message.model';

@Component({
    selector: 'app-comments-block',
    templateUrl: './comments-block.component.html',
    styleUrls: ['./comments-block.component.scss']
})
export class CommentsBlockComponent implements OnInit {

    commentsAttrData: Comment[];
    idsOfLikesComments: any[];
    curLikes: AdminLikes;
    message: Message;
    replay: Comment;

    constructor(private store$: Store) { }

    ngOnInit(): void {
        this.store$.dispatch(initAdminLikesData());
        this.store$.dispatch(initCommentsData());

        this.store$.pipe(
            select(commentsSelect.getCommentsAttrData)
        ).subscribe(data => {
            this.commentsAttrData = data;
        });

        this.store$.pipe(
            select(adminLikesSelect.getAdminLikesData)
        ).subscribe(data => {
            this.curLikes = data.find(like => like.typeOfEntity === 'Comments');
            this.idsOfLikesComments = this.curLikes?.idsOfTypeOfEntity;
        });   
    }

    findLike(id) {
        return this.idsOfLikesComments?.find(item => +item === +id ? true : false );
    }
    
    getReplay(comment) {
      return this.commentsAttrData.find(item => item.id === comment.replayToId);
    }

    likeCount(curComment) {
        this.store$.dispatch(addLike(curComment));
    }

    changeCommentLikes(curLikes) {
        this.store$.dispatch(editAdminLikesData(curLikes));
    }

    changeLikes(currentLike) {
        let curComment = {...this.commentsAttrData.find(comment => comment.id === currentLike.id)},
            curCommentsLikes = {...this.curLikes},
            curIdsOfLikesComments = [...this.idsOfLikesComments];

        if (currentLike.isLiked) {
          console.log(currentLike);
          curIdsOfLikesComments.push(currentLike.id);
        } else {
            console.log(currentLike);
          curIdsOfLikesComments = curIdsOfLikesComments.filter(idx => +idx !== +currentLike.id);
        }

        curComment.like = currentLike.like;
        curCommentsLikes.idsOfTypeOfEntity = curIdsOfLikesComments;

        this.likeCount(curComment);
        this.changeCommentLikes(curCommentsLikes);
    }

    createComment(newComment) {
        this.store$.dispatch(addCommentsData(newComment));

   }

   replayComment(comment) {
       this.replay = comment;
   }

    createNewComment(text) {
        let newComment = new CommentModel();        
        newComment.text = text.textarea;
        newComment.theme = "city-attr";
        newComment.like = '0';

        newComment.replayToId = this.replay ? this.replay.id : 0;

        this.store$.pipe(
            select(adminInfoSelect.getAuthData)
        ).subscribe(data => {
            newComment.author = data.userName;
        });

        if (newComment.author) {
            this.createComment(newComment);

            this.commentsAttrData = [...this.commentsAttrData];
            this.commentsAttrData.push(newComment);
        } else {
            this.message = new Message('danger', 'Нажаль ви не можете залишити коментар. Треба увійти в систему.');
        }
        console.log(newComment);
        this.replay = undefined;
        
    }
}