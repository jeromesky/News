import {Injectable} from '@angular/core';
import {ArticleRenderComponent} from './article-render.component';

@Injectable()
export class SharedService {

    // constructor(private _articleRenderComponent:ArticleRenderComponent){}

    newsletterID:number = 0;

    log(newsletterID:number){
        // this.dataArray.unshift(data);
        console.log('inside shared service', this.newsletterID);
        
        // this._articleRenderComponent.testIt(this.newsletterID);
    }

    doCollectArticles = function(){
        
    }

    doLoad(){

    }

    
    
}