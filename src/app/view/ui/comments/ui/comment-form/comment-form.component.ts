import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
    @Output() createComment = new EventEmitter<any>();
    text = '';

    constructor() { }

    ngOnInit(): void {
    }
    onSubmit(f: NgForm) {
      this.createComment.emit(f.value);
      this.text = '';
      console.log(f);
    }
}
