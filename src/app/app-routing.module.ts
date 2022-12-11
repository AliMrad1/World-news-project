import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./newsmodule/newsmodule.module').then(m => m.NewsmoduleModule) },
 { path: 'news', loadChildren: () => import('./newscategory/newscategory.module').then(m => m.NewscategoryModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
