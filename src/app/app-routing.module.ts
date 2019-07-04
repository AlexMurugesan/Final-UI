import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesModule } from './courses/courses.module';


const routes: Routes = [
  {path:'', loadChildren: () => CoursesModule,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
