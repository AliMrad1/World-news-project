import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsmoduleRoutingModule } from './newsmodule-routing.module';
import { NewsmoduleComponent } from './newsmodule.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SliderComponent} from "./slider/slider.component";
import { HomeblockComponent } from './homeblock/homeblock.component';
import { HomeblockcategoryComponent } from './homeblockcategory/homeblockcategory.component';
import { NewssectionComponent } from './newssection/newssection.component';
import { NewsboxComponent } from './newsbox/newsbox.component';
import { NewsExpandedComponent } from './news-expanded/news-expanded.component';
import { BackgroundvideoComponent } from './backgroundvideo/backgroundvideo.component';
import { AboutUsComponent } from '../about-us/about-us.component';


@NgModule({
  declarations: [
    NewsmoduleComponent,
    SliderComponent,
    HomeblockComponent,
    HomeblockcategoryComponent,
    NewssectionComponent,
    NewsboxComponent,
    NewsExpandedComponent,
    BackgroundvideoComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    NewsmoduleRoutingModule,
    NgbModule
  ]
})
export class NewsmoduleModule { }
