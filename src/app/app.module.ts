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
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup-page/signup-page.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    UserComponent,
    SignupComponent,
   

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    WorldCupService,
    NewsServiceService,
    {provide: HTTP_INTERCEPTORS,useClass: TokenInterceptor,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
