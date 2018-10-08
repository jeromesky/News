import {Component, Injectable, Output, EventEmitter} from '@angular/core';
import {SharedService} from './shared.service';

@Component({
    selector: 'letters',
    template: `<a class="dropdown-item" href="#" (click)="selectNewsletter($event)"    data-id="{{letter.id}}"  *ngFor="let letter of newsletter">{{letter.name}} </a>`
})

//[childSelectArticles]='parentSelectArticles'
export class NewsLetterComponent{
    
    constructor(private _sharedService: SharedService) { }

    @Output() callLoadArticles = new EventEmitter();

   

    newsletter:any[] = [
                    {name: 'WorldWide', id: 1},
                    {name: 'PetroAfricanus', id: 4}
                    ];


    selectNewsletter(event){
        let newsLetterID:number = event.target.id;
        console.log('inside Menu Comp', newsLetterID);
        
        this._sharedService.newsletterID = newsLetterID;
        this._sharedService.log(newsLetterID);
        this.callLoadArticles.emit(newsLetterID);
    }
        
    

   
}