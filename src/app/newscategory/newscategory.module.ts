import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewscategoryRoutingModule } from './newscategory-routing.module';
import { NewscategoryComponent } from './newscategory.component';
import { DetailsNewsCategoryComponent } from './details-news-category/details-news-category.component';


@NgModule({
  declarations: [
    NewscategoryComponent,
    DetailsNewsCategoryComponent
  ],
  imports: [
    CommonModule,
    NewscategoryRoutingModule
  ]
})
export class NewscategoryModule { }
