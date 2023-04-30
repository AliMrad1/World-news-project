import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/Models/Category';
import { NewsServiceService } from 'src/app/classes/service/news-service.service';

@Component({
  selector: 'homeblock',
  templateUrl: './homeblock.component.html',
  styleUrls: ['./homeblock.component.css']
})
export class HomeblockComponent  {
 
  constructor(private httpservice: NewsServiceService) { }

  public category: Category[]=[];
  public categoryWithoutRepetition:string[] = [];


   ngOnInit(): void {

    this.httpservice.getCategories().subscribe((response:Category[]) => {
        this.category = response;
    });
   }
}
