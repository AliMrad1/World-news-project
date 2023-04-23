import { Component, OnInit } from '@angular/core';
import {Category} from "../../classes/Models/Category";
import {NewsServiceService} from "../../classes/service/news-service.service";

@Component({
  selector: 'app-news-expanded',
  templateUrl: './news-expanded.component.html',
  styleUrls: ['./news-expanded.component.css']
})
export class NewsExpandedComponent implements OnInit {

  public newsWithCategory:Category[]=[];

  constructor(private http:NewsServiceService) {
  }

  ngOnInit(): void {
    this.http.getNewsByCategory(1).subscribe((response:any)=>{
      this.newsWithCategory = response.sources;
      console.log(this.newsWithCategory);
    })
  }
}
