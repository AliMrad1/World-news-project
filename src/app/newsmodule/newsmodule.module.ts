import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsmoduleRoutingModule } from './newsmodule-routing.module';
import { NewsmoduleComponent } from './newsmodule.component';
import { SliderComponent } from '../slider/slider.component';



@NgModule({
  declarations: [
    NewsmoduleComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    NewsmoduleRoutingModule
  ]
})
export class NewsmoduleModule { }
