import { Component } from '@angular/core';
import { OffersService } from './offers.service';
import {
  REACTIVE_FORM_DIRECTIVES,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

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
  directives: REACTIVE_FORM_DIRECTIVES,
  template: `
    <div class="row">
      <div class="col-sm-6">
        <form
          [formGroup]="searchForm"
          (ngSubmit)="onSearch(searchForm.value)"
          novalidate
        >
          <fieldset class="form-group">
            <label for="url">Paste url here:</label>
            <input 
              id="url" 
              class="form-control" 
              placeholder="Url"
              formControlName="url"
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
            <footer class="blockquote-footer">{{ comment.author }} - <cite>{{ comment.date | date:'medium' }}</cite></footer>
          </blockquote>
        </div>
        <form
          [formGroup]="addCommentForm"
          (ngSubmit)="onAddComment(addCommentForm.value)"
          novalidate
        >
          <textarea  
            class="form-control" 
            placeholder="Comment"
            formControlName="body"
          ></textarea>
          <input  
            class="form-control" 
            placeholder="Author"
            formControlName="author"
          >      
          <button class="btn">Add Comment</button>
        </form>
      </div>
    </div>
  `
})
export class OffersComponent {
  public offer: IOffer;
  public searchForm: FormGroup;
  public addCommentForm: FormGroup;

  constructor(private offersService: OffersService) {
    this.searchForm = new FormGroup({
      url: new FormControl('', Validators.required)
    });

    this.addCommentForm = new FormGroup({
      body: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required)
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
      (<FormControl>this.addCommentForm.controls['body']).updateValue('');
      (<FormControl>this.addCommentForm.controls['author']).updateValue('');
    });
  }
}
