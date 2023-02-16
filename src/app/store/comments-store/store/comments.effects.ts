import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType  } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { withLatestFrom, filter, switchMap, map, catchError } from 'rxjs/operators';

import { CommentsService } from '../services/comments.service';
import { getLoaded, getLoading } from './comments.selectors';
import { 
    initCommentsData, 
    initCommentsAttrDataSuccess, 
    initCommentsAttrDataFailed,
    addCommentsData,
    addCommentsDataSuccess,
    addCommentsDataFailed,
    editCommentsDataSuccess,
    editCommentsDataFailed,
    addLike
} from './comments.actions';

@Injectable()
export class CommentsEffects {

    constructor(
        private actions$: Actions,
        private commentsService: CommentsService,
        private store$: Store
    ){}
    
    getCommentsCitiesAttrData$ = createEffect(() => this.actions$.pipe(
        ofType(initCommentsData),
        withLatestFrom(
            this.store$.pipe(select(getLoaded)),
            this.store$.pipe(select(getLoading)),
        ),
        filter(([_, loaded, loading]) => !loaded && loading),
        switchMap(() => this.commentsService.getCommentsCitiesAttr().pipe(
            map(data => initCommentsAttrDataSuccess({data})),
            catchError(error => of(
                initCommentsAttrDataFailed({serverError: error.serverError})
            ))
        ))
    ));

    addLikeToComment$ = createEffect(() => this.actions$.pipe(
        ofType(addLike),
        switchMap(data => {
            return this.commentsService.editCommentsCityAttrData(data)}),
        switchMap(() => this.commentsService.getCommentsCitiesAttr().pipe(
            map(data => {
                console.log(data);
                return editCommentsDataSuccess({data});
            }),
            catchError(error => of(
                editCommentsDataFailed({serverError: error.serverError})
            ))
        ))
    ));

    addComment$ = createEffect(() => this.actions$.pipe(
        ofType(addCommentsData),
        switchMap(data => {
            return this.commentsService.addCommentsCityAttrData(data)}),
        switchMap(() => this.commentsService.getCommentsCitiesAttr().pipe(
            map(data => {
                console.log(data);
                return addCommentsDataSuccess({data});
            }),
            catchError(error => of(
                addCommentsDataFailed({serverError: error.serverError})
            ))
        ))
    ));
}

 


