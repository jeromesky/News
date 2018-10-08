import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TabsModule} from "ng2-tabs";

import { AppComponent } from './app.component';


// import { ParseComponent } from './parse-string.component';
import { ArticleRenderComponent } from './article-render.component';
import { ArticlesService } from './articles.service';
import { selectedArticlesComponent} from './selectedArticles.component';
import { NewsLetterComponent} from './newslettersMenu.component';
import { SharedService} from './shared.service';


@NgModule({
  declarations: [
    AppComponent
    ,ArticleRenderComponent
    ,selectedArticlesComponent
    ,NewsLetterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    TabsModule
    // ,BrowserAnimationsModule
  ],
  providers: [ArticlesService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
