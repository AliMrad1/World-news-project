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
    new HomeBlockCategoryModel("beauty",'./assets/img/lotus.png')
  ]

  imgCategory:string[] = [

     './assets/img/interview.png','./assets/img/handshake.png','./assets/img/technology.png','./assets/img/sports.png',
    './assets/img/clipboard.png','./assets/img/mask.png','./assets/img/science.png'
  ]
constructor(private httpservice: NewsServiceService) { }

 public category: Category[]=[];
  public categoryWithoutRepetition:string[] = [];


   ngOnInit(): void {
     this.httpservice.getNewsByCategory().subscribe((response:any)=>{
       this.category=response.sources;
       this.getCategoryFromApi();
       // replace categoryWithoutRepetition with non repetition of category
       this.categoryWithoutRepetition = this.removeDuplicationFromAnArray(this.categoryWithoutRepetition);
       this.addToHomeBlockCategoryModel(this.categoryWithoutRepetition, this.imgCategory);
     })
   }

  private getCategoryFromApi(){
     for(let i = 0; i < this.category.length; i++) {
       this.categoryWithoutRepetition[i] = this.category[i].category;
     }
   }

  private removeDuplicationFromAnArray(array:string[]):string[]{
    let count = 0 ;//Number of records of repeating elements
    for(let i=0;i<array.length;i++){
      for(let j=i+1;j<array.length;j++){
        if(array[i]==array[j]){
          count++;
          break;
        }
      }
    }
    let newLength = array.length-count;
    //Create a new array
    let newArr =new Array<string>(newLength);
    let index=0; //New array index value

    //Traversing old array
    for(let i =0;i<array.length;i++){
      let temp = array[i]; //Old array element
    let flag = false; //By default is not a repetition element
    for(let a=0; a<newArr.length; a++){
      if(temp==newArr[a]){
        flag =true;
        break;
      }
    }
    if(!flag){
      newArr[index++] =temp;
    }
    }

    return newArr;
   }

  private addToHomeBlockCategoryModel(category:string[], imgOfCategory:string[]){
     for(let i = 0; i < category.length; i++) {
       this.homeBlockCM.push(new HomeBlockCategoryModel(category[i],imgOfCategory[i]));
     }
   }
}
