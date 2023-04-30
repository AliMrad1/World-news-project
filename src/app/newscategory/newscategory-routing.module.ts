import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewscategoryComponent } from './newscategory.component';

const routes: Routes = [{ path: ':category/:id', component: NewscategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewscategoryRoutingModule { }
