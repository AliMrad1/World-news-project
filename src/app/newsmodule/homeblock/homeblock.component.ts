import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/Models/Category';
import { NewsServiceService } from 'src/app/classes/service/news-service.service';
import {HomeBlockCategoryModel} from "../../classes/Models/HomeBlockCategoryModel";

@Component({
  selector: 'homeblock',
  templateUrl: './homeblock.component.html',
  styleUrls: ['./homeblock.component.css']
})
export class HomeblockComponent  {
  homeBlockCM:HomeBlockCategoryModel[]=[
    new HomeBlockCategoryModel('General','./assets/img/interview.png'),
    new HomeBlockCategoryModel('Business','./assets/img/handshake.png'),
    new HomeBlockCategoryModel('Sports','./assets/img/sports.png'),
    new HomeBlockCategoryModel('Technologies','./assets/img/technology.png')
  ]  

//   constructor(private httpservice: NewsServiceService) { }
// public category: Category[]=[];
//   ngOnInit(): void {
//     this.httpservice.getNewsByCategory().subscribe((response:any)=>{
//       this.category=response.sources;
//       console.log(this.category);
//     })
//   }
  ngOnInit(): void {
  }

}
