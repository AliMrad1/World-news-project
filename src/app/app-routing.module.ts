import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from 'src/app/user/user.component';
 import {LoginComponent} from 'src/app/login/login.component';
 import {SignupComponent} from 'src/app/signup-page/signup-page.component';
 import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [{ path: '', loadChildren: () => import('./newsmodule/newsmodule.module').then(m => m.NewsmoduleModule) },
 { path: 'news', loadChildren: () => import('./newscategory/newscategory.module').then(m => m.NewscategoryModule) },
 { path: 'user', component: UserComponent },
 { path: 'login', component: LoginComponent },
 {path:'signUp', component:SignupComponent },
 {path:'about-us', component:AboutUsComponent},
 {path:'user', component:UserComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
