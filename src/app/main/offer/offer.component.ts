import {Component, OnDestroy} from '@angular/core';
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
  selector: 'gc-offers',
  directives: [
    REACTIVE_FORM_DIRECTIVES
  ],
  template: `
    <div class="row">
      <div class="col-sm-12 text-xs-center m-b-1">
        <a 
          [href]="offer?.url"
          class="btn btn-primary-outline btn-link"
          target="_blank"
        >
          {{ offer?.url }}
        </a>
      </div> 
    </div>
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
            placeholder="Komentarz"
            formControlName="body"
            rows="4"
          ></textarea>
          <input  
            class="form-control m-b-1" 
            placeholder="Autor"
            formControlName="author"
          >      
          <button class="btn btn-info m-t-1">Dodaj komentarz</button>
        </form>
      </div>
    </div>
  `
})
export class OfferComponent implements OnDestroy {
  public offer: IOffer;
  public addCommentForm: FormGroup;

  private routerUrlSubscribe: any;
  private routerParamsSubscribe: any;

  constructor(
    private offersService: OffersService,
    private activatedRoute: ActivatedRoute
  ) {


    this.routerUrlSubscribe = this.activatedRoute.url.subscribe(() => {
      this.offer = offersService.currentOffer;
    });

    this.routerParamsSubscribe = this.activatedRoute.params.subscribe(params => {
      if (!offersService.currentOffer) {
        const id = params['id'];
        this.offersService.getOfferById(id).subscribe(offer => this.offer = offer);
      }
    });

    this.addCommentForm = new FormGroup({
      body: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required)
    });
  }

  ngOnDestroy() {
    this.routerUrlSubscribe.unsubscribe();
    this.routerParamsSubscribe.unsubscribe();
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
