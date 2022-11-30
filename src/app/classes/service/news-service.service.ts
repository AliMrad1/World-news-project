import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Channel } from '../Models/Channel';
import { News } from '../Models/News';

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

}

