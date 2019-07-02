import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesModule } from './courses/courses.module';


const routes: Routes = [
  {path:'', redirectTo: 'courses',pathMatch:'full'},
  {path: 'courses', loadChildren: () => CoursesModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
