import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';


@Injectable()

export class ArticlesService{

    private _url = 'http://www.frontier-petronews.com/my-office/news/index.cfm?fa=select.collect.localOO';

    constructor(private _http: Http){

        
    }
    getArticles(){

        return this._http.get(this._url).map(res => res.json());//, JSON.stringify(params)
    }

    // postArticles(post){

    //     return this._http.post(this._url, JSON.stringify(post)).map(res => res.json());
    // }
}