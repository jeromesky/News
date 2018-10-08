import { Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
    selector : 'selected-articles-list',
    template : `<div *ngIf="childSelectArticles?.length > 0"> 
                     <div  class="list-group-item  active">Selected Articles</div>
                    <div class="list-group-item  d-flex flex-row " *ngFor="let article of childSelectArticles; let i=index" [attr.data-index]="i" >
                      <div (click)="removeArticle(i)"> (-) </div>
                      <div >{{article.NEWSHARVEST | date: 'dd.MM' }}</div>
                      <div ><a href="{{article?.NEWSURL}}" target="_blank">{{article?.NEWSHEADLINE}}</a></div>
                      <div >{{article.NEWSSOURCE}}</div>
                    </div>
            </div>`
})


export class selectedArticlesComponent{

        //Parent model passe selected articles array
        @Input() childSelectArticles:any;

        //emit user action click to remove from selected news articles, 
        //decrease couter
        @Output() parentDecreaseTotal: EventEmitter<number> = new EventEmitter<number>();

        //test received Input array from parent
        ngAfterViewInit() {
            console.log(this.childSelectArticles);
        }

        removeArticle(index){
            console.log('the click', index);
            this.parentDecreaseTotal.emit();
            //remove article from the selected articles array, 
            this.childSelectArticles.splice(index, 1);
        }


}