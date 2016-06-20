import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from '../../shared/services/offers.service'
import {
  REACTIVE_FORM_DIRECTIVES,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { IComment } from '../../shared/interfaces/comment.interface';
import { IOffer } from '../../shared/interfaces/offer.interface';

@Component({
  selector: 'offers',
  directives: [
    REACTIVE_FORM_DIRECTIVES
  ],
  template: `      
    <div class="row">
      <div class="col-sm-6">
        <img [src]="offer?.imgUrl" class="img-fluid img-thumbnail">
      </div>
      <div class="col-sm-6">  
        <div *ngFor="let comment of offer?.comments">
          <blockquote class="blockquote m-b-1">
            <p class="m-b-0">{{ comment.body }}</p>
            <footer class="blockquote-footer">
              {{ comment.author }} - <cite>{{ comment.date | date:'dd.MM.y HH:mm' }}</cite>
            </footer>
          </blockquote>
        </div>
        <form
          [formGroup]="addCommentForm"
          (ngSubmit)="onAddComment(addCommentForm.value)"
          novalidate
        >
          <textarea  
            class="form-control m-b-1" 
            placeholder="Comment"
            formControlName="body"
            rows="4"
          ></textarea>
          <input  
            class="form-control m-b-1" 
            placeholder="Author"
            formControlName="author"
          >      
          <button class="btn btn-info m-t-1">Add Comment</button>
        </form>
      </div>
    </div>
  `
})
export class OfferComponent {
  public offer: IOffer;
  public addCommentForm: FormGroup;

  constructor(
    private offersService: OffersService,
    private activatedRoute: ActivatedRoute
  ) {
    this.offer = offersService.currentOffer;

    activatedRoute.params
      .map(r => {
        console.log(r['id']);

        return r['id'];
      });

    this.addCommentForm = new FormGroup({
      body: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required)
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
