import { Component, OnInit } from '@angular/core';
import { News } from '../../classes/Models/News';
import { NewsServiceService } from '../../classes/service/news-service.service';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

    public news : News[]=[];

   constructor( private Http : NewsServiceService) { }

   ngOnInit(): void {

    this.Http.SLIDER_NEWS().subscribe((response: any)=> {
       this.news=response;
    });
  }


  }


