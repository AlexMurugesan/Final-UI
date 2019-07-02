import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CmanageComponent } from './cmanage/cmanage.component';
import { TmanageComponent } from './tmanage/tmanage.component';

const routes: Routes = [
  {path:'', component:HeaderComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
