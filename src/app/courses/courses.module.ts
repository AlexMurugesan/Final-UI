import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {BrowserModule} from '@angular/platform-browser';
import { CoursesRoutingModule } from './courses-routing.module';
import { HeaderComponent } from './header/header.component';
import { CmanageComponent } from './cmanage/cmanage.component';
import { TmanageComponent } from './tmanage/tmanage.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
//import { FormGroup, FormControl } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatSelectModule} from '@angular/material/select';
import { ViewComponent } from './view/view.component';
import * as moment from 'moment';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, CmanageComponent, TmanageComponent, FormComponent, ViewComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatSelectModule,
    MultiSelectAllModule,
    AngularDateTimePickerModule,
    // RouterModule.forChild([
    //   { path: 'view', component: ViewComponent },
    //   { path: 'course', component: CmanageComponent },
    //   { path: 'trainer', component: TmanageComponent },
    //   { path: 'batch', component: FormComponent },
    // ])    
  ]
})
export class CoursesModule { }
