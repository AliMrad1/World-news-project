import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WorldCupService } from './classes/service/world-cup.service';
import { NewsServiceService } from './classes/service/news-service.service';
import { TokenInterceptor } from './classes/interceptor/MyInterceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [
    WorldCupService, 
    NewsServiceService,
    {provide: HTTP_INTERCEPTORS,useClass: TokenInterceptor,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
