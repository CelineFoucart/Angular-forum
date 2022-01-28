import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewforumComponent } from './viewforum/viewforum.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'viewforum/:id', component:ViewforumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
