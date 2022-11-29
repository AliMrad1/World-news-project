import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsmoduleComponent } from './newsmodule.component';

const routes: Routes = [{ path: '', component: NewsmoduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsmoduleRoutingModule { }
