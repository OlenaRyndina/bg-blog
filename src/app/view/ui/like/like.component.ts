import { 
    Component, 
    Input, 
    OnInit,
    ViewChild,
    ElementRef,
    Output, 
    EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { isAuth } from '../../../store/admin-auth-store/store/admin-auth.selectors';

@Component({
    selector: 'app-like',
    templateUrl: './like.component.html',
    styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit{
    isAuth$: Observable<boolean> = this.store$.pipe(select(isAuth));

    constructor(private store$: Store) {}

    @Input() curLikedItem;
    likesAmount: number;

    @Input() isLiked;

    @Output() likedItem = new EventEmitter<any>();

    ngOnInit() {
        this.likesAmount = this.curLikedItem.like;
    }
    likeCount() {
        this.isLiked = !this.isLiked;
        let curLiked = {
            id: this.curLikedItem.id, 
            like: this.curLikedItem.like, 
            isLiked: this.isLiked
        };

        this.isLiked === true 
        ? (curLiked.like++ && this.likesAmount++) 
        : (curLiked.like-- && this.likesAmount--);
        this.likedItem.emit(curLiked);
    }
} 

