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
  public newsCategory:News[] = [];
  constructor(private activatedRoute:ActivatedRoute, private http:NewsServiceService) {
   }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
    this.routeCategory = param.get('category');
  })

  this.http.geNewsToASpecificCategory(this.routeCategory).subscribe((response:any) => {
    this.newsCategory = response.articles;
    console.log(this.newsCategory);
  })

    
  }

}
