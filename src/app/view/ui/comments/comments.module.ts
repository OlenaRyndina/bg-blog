import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { LikeModule } from '../like/like.module';
import { CommentsStoreModule } from '../../../store/comments-store/comments-store.module';
import { CommentsBlockComponent } from './blocks/comments-block/comments-block.component';
import { CommentComponent } from './ui/comment/comment.component';
import { CommentFormComponent } from './ui/comment-form/comment-form.component';
import { MessageModule } from '../message/message.module';

@NgModule({
    declarations: [
        CommentsBlockComponent,
        CommentComponent,
        CommentFormComponent,
        
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        FormsModule,
        LikeModule,
        CommentsStoreModule,
        MessageModule
    ],
    exports: [
        CommentsBlockComponent,
        CommentComponent,
        MatButtonModule,
        
    ]
})
export class CommentsModule { }
