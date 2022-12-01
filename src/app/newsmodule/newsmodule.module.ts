import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsmoduleRoutingModule } from './newsmodule-routing.module';
import { NewsmoduleComponent } from './newsmodule.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SliderComponent} from "./slider/slider.component";
import { HomeblockComponent } from './homeblock/homeblock.component';



@NgModule({
  declarations: [
    NewsmoduleComponent,
    SliderComponent,
    HomeblockComponent
  ],
  imports: [
    CommonModule,
    NewsmoduleRoutingModule,
    NgbModule
  ]
})
export class NewsmoduleModule { }
