import {Component, Output, EventEmitter, Input} from '@angular/core';
import {SharedService} from './shared.service';
// import {trigger,style,animate,transition, sequence} from '@angular/animations';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {AddArticleComponent} from './addArticle.component';
// import {ArticlesService} from './articles.service';
// import { ParseComponent } from './parse-string.component';


@Component({
    selector: 'articles-list',
    template: `<ng-template ngFor let-article [ngForOf] = "articlesArray"  let-i = "index" > 
                    
                    <div  *ngIf="headerValue != setHeader(article.HEADER)"  class="list-group-item  active">{{article.HEADER}} {{myVar}}</div>

                    <div class="list-group-item  d-flex flex-row " ><!---[@anim]="article.state"--->
                      <div >{{article.NEWSHARVEST | date: 'dd.MM' }}</div>
                      <div >{{article.NEWSHEADLINE}}  </div>
                      <div >{{article.NEWSSOURCE}}</div>
                      <div><input type="checkbox" value="{{article.ID}}"  (click)="addArticle(article.ID, i)"></div>
                      <div >+</div>
                    </div>
            </ng-template>`
//     ,animations : [
//      trigger('anim', [
//         transition('* => void', [
//           style({ height: '*', opacity: '1', transform: 'translateX(0)', 'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.3)'}),
//           sequence([
//             animate(".25s ease", style({ height: '*', opacity: '.2', transform: 'translateX(20px)', 'box-shadow': 'none'  })),
//             animate(".1s ease", style({ height: '0', opacity: 0, transform: 'translateX(20px)', 'box-shadow': 'none'  }))
//           ])
//         ]),
//         transition('void => active', [
//           style({ height: '0', opacity: '0', transform: 'translateX(20px)', 'box-shadow': 'none' }),
//           sequence([
//             animate(".1s ease", style({ height: '*', opacity: '.2', transform: 'translateX(20px)', 'box-shadow': 'none'  })),
//             animate(".35s ease", style({ height: '*', opacity: 1, transform: 'translateX(0)', 'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.3)'  }))
//           ])
//         ])
//     ])
//   ]
        //,providers:[ArticlesService]*ngIf="head != article.HEADER " *ngIf="head != article.HEADER  head=article.HEADER"
})



export class ArticleRenderComponent {
        PRIORITIZE:number = 1;
        NEWSID:number = 0;
        NEWSURL:string = '';
        NEWSHEADLINE:string = '';
        NEWSSOURCE:string = '';
        HEADER:string = '';
        LISTINGID:number = 0;
        ADDEDDATE:string;
        NEWSHARVEST:string;
        PUBLISHERID:number = 0;
        newsletterID:number = 0;

        headerValue:string = '';
    
    constructor(
                private _sharedService: SharedService
                ) {
                
                }//private _articleService:ArticlesService

    setHeader(name): void {
       this.headerValue = name;
       //console.log(name);
       return name;
    }

    
    
    @Input() callRenderArticles:any ;
    @Output() sendToParent: EventEmitter<Object> = new EventEmitter<Object>();

    addArticle(articleID, index):void{
       
       //pass article object to component // parent
        this.sendToParent.emit(this.articlesArray[index]);
        //remove article from array
        this.articlesArray.splice(index, 1);
 
    }

    testItHere(newsletterID:number){
        console.log('my selected ID in render ', newsletterID);
        
    }

    

    // articlesArray:any[] = [];
    articlesArray:any[] = [{"PRIORITIZE":1,"SO":"news","NEWSID":372314,"ID":372314,"NEWSURL":"http://www.newsminer.com/news/local_news/looking-back-june/article_e65a07ae-5584-11e7-807e-4f370f1d4222.html","NEWSHEADLINE":"Looking Back: June 20, 2017","NEWSSOURCE":"Miner","HEADER":"Alaska Oil","LISTINGID":36997,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 20 2017 00:00:00","PUBLISHERID":1298,"CYCLEID":"170620052848"},{"PRIORITIZE":1,"SO":"news","NEWSID":372315,"ID":372315,"NEWSURL":"http://www.newsminer.com/news/local_news/events-celebrate-th-anniversary-of-pipeline/article_914b7e82-5584-11e7-bcb4-076f75dbde8e.html","NEWSHEADLINE":"Events celebrate 40th anniversary of pipeline","NEWSSOURCE":"Miner","HEADER":"Alaska Oil","LISTINGID":36997,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 20 2017 00:00:00","PUBLISHERID":1298,"CYCLEID":"170620052848"},{"PRIORITIZE":1,"SO":"news","NEWSID":372316,"ID":372316,"NEWSURL":"http://www.newsminer.com/opinion/editorials/pipeline-fueled-alaska-s-growth-in-years-link-from-prudhoe/article_27f630a2-5585","NEWSHEADLINE":"Pipeline fueled Alaska's growth: In 40 years, link from Prudhoe Bay to Valdez helped build state","NEWSSOURCE":"Miner","HEADER":"Alaska Oil","LISTINGID":36997,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 20 2017 00:00:00","PUBLISHERID":1298,"CYCLEID":"170620052848"},{"PRIORITIZE":1,"SO":"news","NEWSID":371307,"ID":371307,"NEWSURL":"https://transcriptdaily.com/2017/06/19/murphy-oil-co-mur-given-consensus-rating-of-hold-by-analysts-updated-updated-updated-","NEWSHEADLINE":"Murphy Oil Corporation (MUR) Given Average Rating of “Hold” by Brokerages","NEWSSOURCE":"Transcript Daily","HEADER":"Anadarko","LISTINGID":29966,"ADDEDDATE":"June, 19 2017 00:00:00","NEWSHARVEST":"June, 20 2017 00:00:00","PUBLISHERID":7328,"CYCLEID":"170619201417"},{"PRIORITIZE":1,"SO":"news","NEWSID":372009,"ID":372009,"NEWSURL":"http://www.highlightpress.com/apc-with-shares-trading-down-at-46-70-equity-alert-rosen-law-firm-announces/64499/clarence","NEWSHEADLINE":"(APC) With Shares Trading down at $46.70 EQUITY ALERT: Rosen Law Firm Announces…","NEWSSOURCE":"Highlight Press","HEADER":"Anadarko","LISTINGID":29966,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 20 2017 00:00:00","PUBLISHERID":554,"CYCLEID":"170620035940"},{"PRIORITIZE":1,"SO":"news","NEWSID":372010,"ID":372010,"NEWSURL":"https://www.thestockobserver.com/2017/06/19/northstar-investment-advisors-llc-holds-position-in-anadarko-petroleum-co-apc-up","NEWSHEADLINE":"Northstar Investment Advisors LLC Has $548000 Position in Anadarko Petroleum Corporation (APC)","NEWSSOURCE":"Stock Observer","HEADER":"Anadarko","LISTINGID":29966,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 20 2017 00:00:00","PUBLISHERID":7810,"CYCLEID":"170620035940"},{"PRIORITIZE":1,"SO":"news","NEWSID":372011,"ID":372011,"NEWSURL":"https://www.thecerbatgem.com/2017/06/19/karp-capital-management-corp-buys-shares-of-227615-anadarko-petroleum-co-apc-updated","NEWSHEADLINE":"Karp Capital Management Corp Acquires Shares of 227615 Anadarko Petroleum Corporation (APC)","NEWSSOURCE":"The Cerbat Gem","HEADER":"Anadarko","LISTINGID":29966,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 20 2017 00:00:00","PUBLISHERID":7338,"CYCLEID":"170620035940"},{"PRIORITIZE":1,"SO":"news","NEWSID":372012,"ID":372012,"NEWSURL":"https://www.thecerbatgem.com/2017/06/19/anadarko-petroleum-co-apc-stake-cut-by-endurance-wealth-management-inc-updated-updat","NEWSHEADLINE":"Anadarko Petroleum Corporation (APC) Position Cut by Endurance Wealth Management Inc.","NEWSSOURCE":"The Cerbat Gem","HEADER":"Anadarko","LISTINGID":29966,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 20 2017 00:00:00","PUBLISHERID":7338,"CYCLEID":"170620035940"},{"PRIORITIZE":1,"SO":"news","NEWSID":372013,"ID":372013,"NEWSURL":"https://www.chaffeybreeze.com/2017/06/19/sei-investments-co-has-29-266-million-stake-in-anadarko-petroleum-co-apc-updated-up","NEWSHEADLINE":"Sei Investments Co. Boosts Position in Anadarko Petroleum Corporation (APC)","NEWSSOURCE":"Chaffey Breeze","HEADER":"Anadarko","LISTINGID":29966,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 20 2017 00:00:00","PUBLISHERID":7369,"CYCLEID":"170620035940"},{"PRIORITIZE":1,"SO":"news","NEWSID":372014,"ID":372014,"NEWSURL":"https://finnewsweek.com/anadarko-petroleum-corporation-nyseapc-a-look-at-whats-behind-the-numbers-volatility/48757/","NEWSHEADLINE":"Anadarko Petroleum Corporation (NYSE:APC): A Look at What's Behind the Numbers & Volatility","NEWSSOURCE":"Financial Newsweek","HEADER":"Anadarko","LISTINGID":29966,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 20 2017 00:00:00","PUBLISHERID":7822,"CYCLEID":"170620035940"},{"PRIORITIZE":1,"SO":"news","NEWSID":372015,"ID":372015,"NEWSURL":"http://leicesterpost.com/2017/06/20/murphy-oil-corporation-mur-receives-consensus-rating-of/","NEWSHEADLINE":"Murphy Oil Corporation (MUR) Receives Consensus Rating of \"Hold\" from Brokerages","NEWSSOURCE":"Leicester Post","HEADER":"Anadarko","LISTINGID":29966,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 20 2017 00:00:00","PUBLISHERID":11515,"CYCLEID":"170620035940"},{"PRIORITIZE":1,"SO":"news","NEWSID":370774,"ID":370774,"NEWSURL":"https://sportsperspectives.com/2017/06/19/atlantic-trust-group-llc-boosts-position-in-anadarko-petroleum-corporation-apc.htm","NEWSHEADLINE":"Atlantic Trust Group LLC Boosts Position in Anadarko Petroleum Corporation (APC)","NEWSSOURCE":"Sports Perspectives","HEADER":"Anadarko","LISTINGID":29966,"ADDEDDATE":"June, 19 2017 00:00:00","NEWSHARVEST":"June, 19 2017 00:00:00","PUBLISHERID":7306,"CYCLEID":"170619171424"},{"PRIORITIZE":1,"SO":"news","NEWSID":370839,"ID":370839,"NEWSURL":"http://www.upstreamonline.com/live/1286266/buyer-of-linns-san-joaquin-assets-unveiled","NEWSHEADLINE":"Buyer of Linn's San Joaquin assets unveiled","NEWSSOURCE":"Upstream Online","HEADER":"Anadarko","LISTINGID":29966,"ADDEDDATE":"June, 19 2017 00:00:00","NEWSHARVEST":"June, 19 2017 00:00:00","PUBLISHERID":24,"CYCLEID":"170619172700"},{"PRIORITIZE":1,"SO":"news","NEWSID":371304,"ID":371304,"NEWSURL":"http://newburghgazette.com/2017/06/19/the-henderson-group-plc-has-844000-stake-in-murphy-oil-co/","NEWSHEADLINE":"The Henderson Group PLC Has $844000 Stake in Murphy Oil Co. (MUR)","NEWSSOURCE":"Newburgh Gazette","HEADER":"Anadarko","LISTINGID":29966,"ADDEDDATE":"June, 19 2017 00:00:00","NEWSHARVEST":"June, 19 2017 00:00:00","PUBLISHERID":8626,"CYCLEID":"170619201417"},{"PRIORITIZE":1,"SO":"news","NEWSID":371567,"ID":371567,"NEWSURL":"https://sportsperspectives.com/2017/06/19/apache-co-apa-shares-bought-by-neuburgh-advisers-llc-updated-updated.html","NEWSHEADLINE":"Neuburgh Advisers LLC Has $468000 Position in Apache Corporation (APA)","NEWSSOURCE":"Sports Perspectives","HEADER":"Apache","LISTINGID":29021,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 20 2017 00:00:00","PUBLISHERID":7306,"CYCLEID":"170620012238"},{"PRIORITIZE":1,"SO":"news","NEWSID":371568,"ID":371568,"NEWSURL":"https://transcriptdaily.com/2017/06/19/ims-capital-management-has-671000-position-in-apache-co-apa-updated-updated.html","NEWSHEADLINE":"IMS Capital Management Has $671000 Stake in Apache Corporation (APA)","NEWSSOURCE":"Transcript Daily","HEADER":"Apache","LISTINGID":29021,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 20 2017 00:00:00","PUBLISHERID":7328,"CYCLEID":"170620012238"},{"PRIORITIZE":1,"SO":"news","NEWSID":371569,"ID":371569,"NEWSURL":"https://sportsperspectives.com/2017/06/19/apache-co-apa-stake-lowered-by-commerce-bank-updated-updated.html","NEWSHEADLINE":"Commerce Bank Sells 631 Shares of Apache Corporation (APA)","NEWSSOURCE":"Sports Perspectives","HEADER":"Apache","LISTINGID":29021,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 20 2017 00:00:00","PUBLISHERID":7306,"CYCLEID":"170620012238"},{"PRIORITIZE":1,"SO":"news","NEWSID":371570,"ID":371570,"NEWSURL":"https://www.chaffeybreeze.com/2017/06/19/engineers-gate-manager-lp-sells-52113-shares-of-apache-co-apa-updated-updated.html","NEWSHEADLINE":"Apache Corporation (APA) Position Reduced by Engineers Gate Manager LP","NEWSSOURCE":"Chaffey Breeze","HEADER":"Apache","LISTINGID":29021,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 20 2017 00:00:00","PUBLISHERID":7369,"CYCLEID":"170620012238"},{"PRIORITIZE":1,"SO":"news","NEWSID":371571,"ID":371571,"NEWSURL":"https://transcriptdaily.com/2017/06/20/apache-apa-given-news-impact-rating-of-0-25-updated-updated-updated.html","NEWSHEADLINE":"Apache Corporation (APA) Earns Daily Media Impact Score of 0.25","NEWSSOURCE":"Transcript Daily","HEADER":"Apache","LISTINGID":29021,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 20 2017 00:00:00","PUBLISHERID":7328,"CYCLEID":"170620012238"},{"PRIORITIZE":1,"SO":"news","NEWSID":371407,"ID":371407,"NEWSURL":"http://www.mysanantonio.com/business/eagle-ford-energy/article/Scientists-find-Texas-shale-drilling-pollutes-11231355.php","NEWSHEADLINE":"Scientists find Texas shale drilling pollutes air, causes earthquakes","NEWSSOURCE":"mySanAntonio.com","HEADER":"Apache","LISTINGID":29021,"ADDEDDATE":"June, 19 2017 00:00:00","NEWSHARVEST":"June, 19 2017 00:00:00","PUBLISHERID":5967,"CYCLEID":"170619205824"},{"PRIORITIZE":1,"SO":"news","NEWSID":371565,"ID":371565,"NEWSURL":"https://globenewswire.com/news-release/2017/06/19/1025919/0/en/Apache-Opens-Applications-for-2017-2018-Tree-Grant-Program.ht","NEWSHEADLINE":"Apache Opens Applications for 2017","NEWSSOURCE":"GlobeNewswire ","HEADER":"Apache","LISTINGID":29021,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 19 2017 00:00:00","PUBLISHERID":2218,"CYCLEID":"170620012238"},{"PRIORITIZE":1,"SO":"news","NEWSID":371566,"ID":371566,"NEWSURL":"https://www.chaffeybreeze.com/2017/06/19/favorable-press-coverage-somewhat-likely-to-impact-apache-corporation-apa-stock-pri","NEWSHEADLINE":"Apache Corporation (APA) Getting Favorable Media Coverage, Study Finds","NEWSSOURCE":"Chaffey Breeze","HEADER":"Apache","LISTINGID":29021,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 19 2017 00:00:00","PUBLISHERID":7369,"CYCLEID":"170620012238"},{"PRIORITIZE":1,"SO":"news","NEWSID":371768,"ID":371768,"NEWSURL":"http://bangaloreweekly.com/artisan-partners-limited-partnership-has-217-99-million-stake-in-apache-corporation-apa-453309.ht","NEWSHEADLINE":"The Artisan Partners Limited Partnership Has $217.99 Million Stake in Apache Corporation (APA)","NEWSSOURCE":"BangaloreWeekly","HEADER":"Apache","LISTINGID":29021,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 19 2017 00:00:00","PUBLISHERID":7675,"CYCLEID":"170620022954"},{"PRIORITIZE":1,"SO":"news","NEWSID":371769,"ID":371769,"NEWSURL":"https://transcriptdaily.com/2017/06/19/apache-co-forecasted-to-earn-q2-2017-earnings-of-0-10-per-share-apa-updated-updated-u","NEWSHEADLINE":"Apache Co. Forecasted to Earn Q2 2017 Earnings of $0.10 Per Share (APA)","NEWSSOURCE":"Transcript Daily","HEADER":"Apache","LISTINGID":29021,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 19 2017 00:00:00","PUBLISHERID":7328,"CYCLEID":"170620022954"},{"PRIORITIZE":1,"SO":"news","NEWSID":371770,"ID":371770,"NEWSURL":"https://www.whatsonthorold.com/2017/06/19/foyston-gordon-pennantpark-investment-has-1-25-sentiment/","NEWSHEADLINE":"Foyston Gordon & Payne Has Decreased By $1.20 Million Its Apache Corp. (APA) Position; Pennantpark Investment ...","NEWSSOURCE":"Thorold News","HEADER":"Apache","LISTINGID":29021,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 19 2017 00:00:00","PUBLISHERID":7427,"CYCLEID":"170620022954"},{"PRIORITIZE":1,"SO":"news","NEWSID":371771,"ID":371771,"NEWSURL":"https://oxfordbusinessdaily.com/investor-watch-focusing-on-shares-of-apache-corporation-nyseapa/","NEWSHEADLINE":"Investor Watch: Focusing on Shares of Apache Corporation (NYSE:APA)","NEWSSOURCE":"Business Daily","HEADER":"Apache","LISTINGID":29021,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 19 2017 00:00:00","PUBLISHERID":7219,"CYCLEID":"170620022954"},{"PRIORITIZE":1,"SO":"news","NEWSID":368213,"ID":368213,"NEWSURL":"http://timesofindia.indiatimes.com/business/international-business/asia-gasoil/jet-fuel-tender-summary-indias-essar-oil-offe","NEWSHEADLINE":"Essar Oil: Asia Gasoil/Jet Fuel Tender Summary","NEWSSOURCE":"Times of India","HEADER":"Asia gas","LISTINGID":37040,"ADDEDDATE":"June, 19 2017 00:00:00","NEWSHARVEST":"June, 19 2017 00:00:00","PUBLISHERID":54,"CYCLEID":"170619022030"},{"PRIORITIZE":1,"SO":"news","NEWSID":371174,"ID":371174,"NEWSURL":"https://www.desmog.uk/2017/06/19/bp-s-close-association-countries-accused-human-rights-abuses-puts-national-portrait-gallery-sponsorship-risk","NEWSHEADLINE":"BP's 'Close Association' with Countries Accused of Human Rights Abuses Puts Gallery Sponsorship at Risk","NEWSSOURCE":"DeSmog UK","HEADER":"BP","LISTINGID":29983,"ADDEDDATE":"June, 19 2017 00:00:00","NEWSHARVEST":"June, 20 2017 00:00:00","PUBLISHERID":8700,"CYCLEID":"170619192905"},{"PRIORITIZE":1,"SO":"news","NEWSID":371643,"ID":371643,"NEWSURL":"http://www.theaustralian.com.au/business/mining-energy/oil-giants-step-up-support-for-us-carbon-tax/news-story/4547340c59146","NEWSHEADLINE":"Oil giants step up support for US carbon tax","NEWSSOURCE":"The Australian","HEADER":"BP","LISTINGID":29983,"ADDEDDATE":"June, 20 2017 00:00:00","NEWSHARVEST":"June, 20 2017 00:00:00","PUBLISHERID":257,"CYCLEID":"170620014510"}] ;
    private errorMessage:any = '';

    //Array<{userId: number, title: string, id: number}>
    
    
    

    // @Output() click: EventEmitter<string> = new EventEmitter<string>();

    

    onCollectComplete(){

    }
}

export class LoadArticles{

     newsletterID:number = 0;

     fetch(newsletterID:number){
        // event.preventDefault();
        // this.click.emit('Click from nested component');
        console.log('onbs select * ' + this.newsletterID);
        
        // this._articleService.getArticles().subscribe(
        //             response =>  this.articlesArray.push(response)
        //             ,error => alert(error)
        //            , this.onCollectComplete
        //  );

        // this._postDataService.getData()
        //     .subscribe(
        //         posts => this.posts = posts,
        //         error => this.errorMessage = <any>error);
    }
};

// @Input() childSelectArticles:any;

// let loadArticles:LoadArticles = new LoadArticles();

// function actionLoad(newsletterID){
//     this.loadArticles.fetch();
// }





//  response =>  this.articlesArray.push(response)
// import { Component, Input } from '@angular/core';
// import {Injectable} from '@angular/core';


// @Injectable()

// @Component({
//     selector: 'articles',
//     template : `
//                 <div class="list-group-item  d-flex flex-row " *ngFor="let item of articles">
//                     <div class=" ">30.May.17 {{item.userId}}</div>
//                     <div class="">{{item.title}}</div>
//                     <div class=" ">Green Mountain Outlook</div>
//                     <div class=" "><input type="checkbox" value="{{item.id}}"></div>
//                     <div class=" ">+</div>
//                 </div>`,
//     inputs: []
// })

// ====================
// export class ArticleRenderComponent{

//     // @Input() articles : Array<{}>;

//     // constructor(articles){

           
            

//     // }

//     myFunction( ){
//         console.log('dammmmmit ');
//     }
//     //  


// }


// export class ParseComponent{
    
//     public doJSON(object){
//         var arr: any[] = [];

//         for(let item in object){
//             arr.push(object[item]);
//         }

//         return arr;
//     }
    
// }
