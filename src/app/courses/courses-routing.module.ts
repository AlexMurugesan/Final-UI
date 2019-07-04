import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CmanageComponent } from './cmanage/cmanage.component';
import { TmanageComponent } from './tmanage/tmanage.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'', redirectTo:'view',pathMatch:'full'},
  {path:'view', component:ViewComponent,pathMatch:'full'},
  {path:'course', component:CmanageComponent,pathMatch:'full'},
  {path:'trainer', component:TmanageComponent,pathMatch:'full'},
  {path:'batch', component:FormComponent,pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
