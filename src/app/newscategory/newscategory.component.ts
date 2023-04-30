import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../classes/Models/News';
import { NewsServiceService } from '../classes/service/news-service.service';

@Component({
  selector: 'app-newscategory',
  templateUrl: './newscategory.component.html',
  styleUrls: ['./newscategory.component.css']
})
export class NewscategoryComponent implements OnInit {

  public routeCategory:string|any = "";
  public routeCategory_ID:number|any = "";
  public newsCategory:News[] = [];
  time:string = "";

  constructor(private activatedRoute:ActivatedRoute, private http:NewsServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
    this.routeCategory = param.get('category');
    this.routeCategory_ID = param.get('id');
    this.routeCategory_ID = parseInt(this.routeCategory_ID);
  })

  this.http.getNewsByCategory(this.routeCategory_ID).subscribe((response:News[]) => {
    this.newsCategory = response;
    this.newsCategory.forEach((news) => {
        var time = news.created_at.split(" ");
        
    })
  })
  }

}
