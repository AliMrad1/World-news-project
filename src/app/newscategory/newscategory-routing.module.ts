import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewscategoryComponent } from './newscategory.component';

const routes: Routes = [{ path: 'beauty', component: NewscategoryComponent },
{ path: 'general', component: NewscategoryComponent },
{ path: 'business', component: NewscategoryComponent },
{ path: 'technology', component: NewscategoryComponent },
{ path: 'sports', component: NewscategoryComponent },
{ path: 'entrainment', component: NewscategoryComponent },
{ path: 'health', component: NewscategoryComponent },
{ path: 'science', component: NewscategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewscategoryRoutingModule { }
