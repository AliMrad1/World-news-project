import { Component, OnInit } from '@angular/core';
import { News } from '../classes/Models/News';
import { NewsServiceService } from '../classes/service/news-service.service';
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

 public news : News[]=[];
 

  constructor( private Http : NewsServiceService) { }

  ngOnInit(): void {
    this.Http.getNews().subscribe((response: any)=> {
      this.news=response.articles
      console.log(this.news)

    })
  }


  }


