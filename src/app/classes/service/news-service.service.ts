import { HttpClient } from '@angular/common/http';
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

 
  public getNews(): Observable<News[]> {
    return this.httpClient.get<News[]>(`${this.apisUrl}`);
  }

  public getNewsByChannel(channelName: Channel): Observable<News> {
    return this.httpClient.get<News>(`${this.apisUrl}`);
  }

}
