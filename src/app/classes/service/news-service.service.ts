import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../Models/Category';
import { Channel } from '../Models/Channel';
import { News } from '../Models/News';
import {distinct, distinctUntilChanged} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService{

  apisUrl:string = environment.apisBaseUrlNews;

  constructor(private httpClient:HttpClient) { }
  // country=us&apiKey=API_KEY
  private params:HttpParams = new HttpParams()
          .set("country","us")
          .set("apiKey","213fd8b9658f4a5fb03054c0835d7469");

  public getNews(): Observable<News[]> {
    return this.httpClient.get<News[]>(`${this.apisUrl}`,{
     params : this.params
    });
  }

  public getNewsByChannel(channelName: Channel): Observable<News> {
    return this.httpClient.get<News>(`${this.apisUrl}`);
  }

  private paramsCategory:HttpParams = new HttpParams()
          .set("apiKey","213fd8b9658f4a5fb03054c0835d7469");

  public getNewsByCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.apisUrl}/sources`,{
     params : this.paramsCategory
    }).pipe();
  }

  
  public geNewsToASpecificCategory(httpCategoryParam:string): Observable<News[]> {
    return this.httpClient.get<News[]>(`${this.apisUrl}`,{
     params : new HttpParams()
     .set("category",httpCategoryParam)
     .set("apiKey","213fd8b9658f4a5fb03054c0835d7469")
    }).pipe();
  }
}

