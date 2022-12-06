import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WorldCupService } from './classes/service/world-cup.service';
import { NewsServiceService } from './classes/service/news-service.service';
import { TokenInterceptor } from './classes/interceptor/MyInterceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    WorldCupService,
    NewsServiceService,
    {provide: HTTP_INTERCEPTORS,useClass: TokenInterceptor,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
