import { Component } from '@angular/core';
import { OffersService } from './offers.service';
import {
  Control,
  FormBuilder,
  ControlGroup,
  Validators
} from '@angular/common';

export interface IComment {
  body: string;
  author: string;
  date: Date;
}

interface IOffer {
  _id: string;
  url: string;
  imgUrl?: string;
  comments: IComment[];
}

@Component({
  selector: 'offers',
  template: `
    <div class="row">
      <div class="col-sm-6">
        <form
          [ngFormModel]="searchForm"
          (ngSubmit)="onSearch(searchForm.value)"
          novalidate
        >
          <fieldset class="form-group">
            <label for="url">Paste url here:</label>
            <input 
              id="url" 
              class="form-control" 
              placeholder="Url"
              ngControl="url"
            >
            <button class="btn btn-primary">Search</button>
          </fieldset>
        </form>
      </div>
      <div *ngIf="offer" class="col-sm-6">
        <img [src]="offer.imgUrl" class="img-fluid img-thumbnail">
        <div *ngFor="let comment of offer.comments">
          <blockquote class="blockquote">
            <p class="m-b-0">{{ comment.body }}</p>
            <footer class="blockquote-footer">{{ comment.author }} - <cite>{{ comment.date }}</cite></footer>
          </blockquote>
        </div>
        <form
          [ngFormModel]="addCommentForm"
          (ngSubmit)="onAddComment(addCommentForm.value)"
          novalidate
        >
          <textarea  
            class="form-control" 
            placeholder="Comment"
            ngControl="body"
          ></textarea>
          <input  
            class="form-control" 
            placeholder="Author"
            ngControl="author"
          >      
          <button class="btn">Add Comment</button>
        </form>
      </div>
    </div>
  `
})
export class OffersComponent {
  public offer: IOffer;
  public searchForm: ControlGroup;
  public addCommentForm: ControlGroup;

  constructor(
    private offersService: OffersService,
    private fb: FormBuilder
  ) {
    this.searchForm = fb.group({
      url: ['', Validators.required]
    });

    this.addCommentForm = fb.group({
      body: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  public onSearch({ url }): void {
    this.offersService.getOfferForUrl(url).subscribe(response => {
      this.offer = response;
    });
  }

  public onAddComment(newComment: IComment): void {
    newComment.date = new Date();
    this.offer.comments.push(newComment);
    this.offersService.saveComment(this.offer._id, newComment).subscribe(response => {
      (<Control>this.addCommentForm.controls['body']).updateValue('');
      (<Control>this.addCommentForm.controls['author']).updateValue('');
    });
  }
}
