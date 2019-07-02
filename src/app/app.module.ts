import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoursesModule } from './courses/courses.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatSelectModule } from '@angular/material/select';
import * as moment from 'moment';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { DatetimePopupModule } from 'ngx-bootstrap-datetime-popup';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
   NgMultiSelectDropDownModule.forRoot(),
   MatSelectModule,
   MultiSelectAllModule,
   DatepickerModule,
   TimepickerModule,
   DatetimePopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
