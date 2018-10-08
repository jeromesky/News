import { Component, ViewChild,ViewEncapsulation } from '@angular/core';
import { ArticlesService} from './articles.service';
import { NewsLetterComponent} from './newslettersMenu.component';
// 
import { ArticleRenderComponent } from './article-render.component';
import { selectedArticlesComponent } from './selectedArticles.component';
// import {TabsModule} from "ng2-tabs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  ,providers: [ArticlesService]
  ,encapsulation: ViewEncapsulation.None,
  
})



export class AppComponent {

    currentNewsLerrId:number = 0;
    //model Object
    public newsletter = {
      current: {
        count    : 0,
        letter   : 'None selected',
        articlesSelected: [],
        increment : function() {
                  this.count++;
                  },
        decrease : function() {
                  this.count--;
                  }
        },
      worldwide : {
        name : 'WorldWide',
        id   : 1,
        toColect: 12
        },
      petroAfricanus : {
        name : 'PetroAfricanus',
        id   : 67,
        toColect: 12
        }
      }


    title:string = 'Client Private News';
    newsLetterName:string = this.newsletter.current.letter;

    //private articlesSelected = [];
    //make available to child components the current Object data
    // parentSelectedArticles:Object = this.newsletter.current.articlesSelected; //this.newsletter.current;//
    parentSelectArticles:Object = this.newsletter.current.articlesSelected;
    parentDecrease:Object = this.newsletter.current.decrease;

    @ViewChild('ArticleRenderComponent') renderArticles:ArticleRenderComponent;

    //  private render = new ArticleRenderComponent();

    onSelectArticle(article){
      
      this.newsletter.current.articlesSelected.push(article);
      this.newsletter.current.increment();
    
    }

    onRemoveArticle($event){

      console.log($event);
      this.newsletter.current.decrease();
    }

    constructor(){} //, private _articleService: ArticlesService ///private _articleRender: ArticleRenderComponent

    ngAfterViewInit() {
      // After the view is initialized, this.userProfile will be available
      this.update();
      // this.renderArticle.loadArticles();
      console.log('only after THIS EVENT "child" is usable!!');
    }

    testIt(newsletterID:number){
        console.log('my selected ID in render ', newsletterID);
        
    }
    

    update() {
      // this.renderArticle.loadArticles(1);
      
      // console.log(this.renderArticles);
      console.log('after page  View Init');
     
      this.renderArticles.addArticle();
      
      
    }


  // articlesArray = [];

  //  onSelectLetter(object, $event){
  //       //creat instance of the parsing
  //       //lets reset the article array, as we have a new newsletter to work with and new data
  //       this.articlesArray = [];
  //       this.newsLetterName = object.name;
  //       var parsing  = new ParseComponent();
  //       //  this._articleService.getArticles(object).subscribe(
  //       //             responce => { this.articlesArray.push(parsing.doJSON(responce))},
  //       //             error => alert(error),
  //       //             this.onCollectComplete
  //       //  );
            

         
  //   }

    // onCollectComplete(){
    //   console.log("Finished on function call");
    //   var render = new ArticleRenderComponent();
    //   this.isArticlesAvailable = true;
    //   render.myFunction();
    // }

    
}

            // post => this.newsletter.articlesArray = JSON.parse(post)
            // function(responce){
            //   this.articlesArray = parsing.doJSON(responce);
            //        console.log(this.articlesArray);
            // }