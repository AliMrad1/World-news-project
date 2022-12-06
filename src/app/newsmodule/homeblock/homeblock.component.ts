import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/Models/Category';
import { NewsServiceService } from 'src/app/classes/service/news-service.service';
import {HomeBlockCategoryModel} from "../../classes/Models/HomeBlockCategoryModel";

@Component({
  selector: 'homeblock',
  templateUrl: './homeblock.component.html',
  styleUrls: ['./homeblock.component.css']
})
export class HomeblockComponent implements OnInit {

  homeBlockCM:HomeBlockCategoryModel[]=[
    new HomeBlockCategoryModel('General','./assets/img/interview.png'),
    new HomeBlockCategoryModel('Business','./assets/img/handshake.png'),
    new HomeBlockCategoryModel('Sports','./assets/img/sports.png'),
    new HomeBlockCategoryModel('Technologies','./assets/img/technology.png')
  ];
  ngOnInit(): void {
  }

}
