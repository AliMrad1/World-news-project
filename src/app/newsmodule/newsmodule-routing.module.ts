import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsmoduleComponent } from './newsmodule.component';
import { AddnewsComponent } from './addnews/addnews.component';
import { AddnewsresponseComponent } from './addnewsresponse/addnewsresponse.component';

const routes: Routes = [
  { path: '', component: NewsmoduleComponent },
  { path: 'news/new', component: AddnewsComponent },
  { path: 'news/new/redirect', component: AddnewsresponseComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsmoduleRoutingModule { }
