import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { SharedService } from '../../shared.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { Trainer } from '../cmanage/interfaces_req';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { TrainerAllocation } from '../view/RequiredClasses';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  datePipe = new DatePipe('en-US');

  public TrainerAllocationForm: FormGroup;
  constructor(private fb: FormBuilder, private service: SharedService) { }
  courses: any = [];
  trainers: Trainer[];
  trainersDummy: Trainer[] = [];
  cid: number;
  tid: any;
  date: Date=new Date();
  date1:Date=new Date();

  ngOnInit() {
    this.TrainerAllocationForm = this.fb.group({
      trainer_id: '',
      course_id: '',
      backup_trainer_id: '',
      startTime: this.date,
      endTime: this.date1,
      comment: ''
    });
    this.service.getCourses().subscribe(data => {
      this.courses = data;
    })
  }

  
  settings={
    bigBanner:true,
    timePicker:true,
    format: 'dd-MM-yyyy hh:mm a',
    defaultOpen:false,
    closeOnSelect: false
  }

  loadTrainers() {
    this.service.getTrainerList(this.cid).subscribe(data => {
      this.trainers = data;
    })
  }
  loadBackUp() {
    this.trainers.forEach(element => {
      if (element.trainerId != this.tid)
        this.trainersDummy.push(element);
    });
  }
  callSubmit() {
    
    let trainerAllocation={
    trainer_allocation_id:this.TrainerAllocationForm.value.trainer_allocation_id,
    course_id:this.TrainerAllocationForm.value.course_id,
    trainer_id:this.TrainerAllocationForm.value.trainer_id,
    backup_trainer_id:this.TrainerAllocationForm.value.backup_trainer_id,
    comment:this.TrainerAllocationForm.value.comment,
    startTime:this.datePipe.transform(this.TrainerAllocationForm.value.startTime, 'yyyy-MM-dd HH:mm:ss'),
    endTime:this.datePipe.transform(this.TrainerAllocationForm.value.endTime, 'yyyy-MM-dd HH:mm:ss')
    }
    console.log(trainerAllocation);
    console.log(this.TrainerAllocationForm.value);
    this.service.addSession([trainerAllocation]).subscribe(data=>
      {
        this.ngOnInit();
        alert("Submitted successfully");
      });

  }
}
