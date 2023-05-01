import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/classes/Models/Category';
import { News } from 'src/app/classes/Models/News';
import { NewsServiceService } from 'src/app/classes/service/news-service.service';
import { SharedService } from 'src/app/classes/service/shared.service';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {

  public categories: Category[]=[];
  public news:News = new News();
  
  constructor(private httpservice:NewsServiceService,private router: Router, private shared:SharedService) { }

  ngOnInit(): void {

      this.httpservice.getCategories().subscribe((response:Category[]) => {
        this.categories = response;
      });
  }

  selectedFileName: string = "";

  onFileSelected(event:any): void {
    const file = event.target.files[0];
    this.selectedFileName = file.name;
  }


  getSelectedFileName(): string {
    return this.selectedFileName ? this.selectedFileName : 'Choose file';
  }

  ADD_NEW_NEWS(): void {
    this.httpservice.addNews(this.news).subscribe((response:any) => {
      this.router.navigate(['/news/new/redirect']);
      this.shared.sharedData = response.response;
    })
  }
}
