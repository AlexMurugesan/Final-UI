import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { SharedService } from '../../shared.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { Trainer, Course } from '../cmanage/interfaces_req';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { TrainerAllocation, Batch } from '../view/RequiredClasses';
import { element } from 'protractor';

const dateFormat = 'dd/MM/yyyy';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  datePipe = new DatePipe('en-US');
  batchName:string='';
  public TrainerAllocationForm: FormGroup;
  constructor(private fb: FormBuilder, private service: SharedService) { }
  courses: Course[] = [];
  trainers: Trainer[];
  trainersDummy: Trainer[] = [];
  cid: number;
  tid: any;
  date: Date=new Date();
  date1:Date=new Date();
  var1:boolean=false;
  var2:boolean=false;
  var3:boolean=false;
  var4:boolean=true;
  var5:boolean=false;
  addToTable:any[]=[];
  batch:Batch=new Batch(null);
  datewiseSessions = new Map<string, TrainerAllocation[]>();
  batches:Batch[]=[];
  selectedBatch=null;
  existingBatchSelected=false;
  ngOnInit() {
    this.addToTable=[];
    this.batchName='';
    this.var1=false;
    this.var2=false;
    this.var3=false;
    this.var4=true;
    this.var5=false;
    this.TrainerAllocationForm = this.fb.group({
      trainer_id: '',
      course_id: '',
      backup_trainer_id: '',
      startTime: this.date,
      endTime: this.date1,
      comment: ''
    });
  
    this.service.getCourses().subscribe(courseData => {
      this.courses = courseData;
    });
    
  }

  newBatch()
  {
    this.var1=true;
    this.var4=false;
  }
  back()
  {
    this.var4=true;
    this.var1=false;
  }
  back1()
  {
    this.var4=true;
    this.var5=false;
    this.batchName='';
    this.ngOnInit();
    this.batches=[];
  }
  back2()
  {
    this.var2=false;
    this.var4=true;
    this.batchName='';
    this.selectedBatch='';
    this.ngOnInit();
    this.batches=[];
  }
  existingBatch()
  {
    this.service.getBatches().subscribe(data=>{
      this.batches=data;
  })
    this.var4=false;
    this.var5=true;
    this.selectedBatch='';
  }
  add()
  {
    //this.batchName=this.selectedBatch.toUpperCase();
    this.service.getTimesheetForBatch(this.selectedBatch).subscribe(data=>
      {
        this.convertToDisplayFormat(data.trainerAllocation);
        this.var2=true;
        this.var5=false;
        this.var3=true;
        this.existingBatchSelected=true;
      })

  }
  addBatch()
  {
    this.batchName=this.batchName.toUpperCase()
    this.service.addBatchName(this.batchName).subscribe(data=>
      {
        this.batch=data;
        alert(data.batchName+" Batch Added Successfully!!");
          
          this.var1=false;
          this.var2=true;
        
      },err=>{
        console.log(err.status);
        alert("Batch Is already Present");
      })
  }
  convertToDisplayFormat(trainerAllocation:TrainerAllocation[])
  {
    trainerAllocation.forEach(element=>
      {
        let x={
          trainer_allocation_id:element.trainer_allocation_id,
          course_id:element.course.course_id,
          trainer_id:element.trainer.trainer_id,
          backup_trainer_id:element.backupTrainer?element.backupTrainer.trainer_id:null,
          comment:element.comment,
          startTime:this.datePipe.transform(element.start_time, 'yyyy-MM-dd HH:mm:ss'),
          endTime:this.datePipe.transform(element.end_time, 'yyyy-MM-dd HH:mm:ss'),
          batch_id:this.selectedBatch,
          course_name:element.course.course_name,
          trainer_name: element.trainer.trainer_name,
          backup_trainer_name: element.backupTrainer?element.backupTrainer.trainer_name:null
          }
          this.addToTable.push(x);
      })

  }
  addRow()
  {
    let course_name1:string='';
    let trainer_name1:string='';
    let backup_trainer_name1:string='';
    this.courses.forEach(element => {
      if(this.TrainerAllocationForm.value.course_id==element.course_id)
      {
        course_name1= element.course_name;
      }
    });
    this.trainers.forEach(element => {
      if(this.TrainerAllocationForm.value.trainer_id==element.trainerId)
      {
        trainer_name1= element.trainerName;
      }
    });
    this.trainersDummy.forEach(element => {
      if(this.TrainerAllocationForm.value.backup_trainer_id==element.trainerId)
      {
        backup_trainer_name1=element.trainerName;
      }
    });

    let trainerAllocation={
      trainer_allocation_id:this.TrainerAllocationForm.value.trainer_allocation_id,
      course_id:this.TrainerAllocationForm.value.course_id,
      trainer_id:this.TrainerAllocationForm.value.trainer_id,
      backup_trainer_id:this.TrainerAllocationForm.value.backup_trainer_id,
      comment:this.TrainerAllocationForm.value.comment,
      startTime:this.datePipe.transform(this.TrainerAllocationForm.value.startTime, 'yyyy-MM-dd HH:mm:ss'),
      endTime:this.datePipe.transform(this.TrainerAllocationForm.value.endTime, 'yyyy-MM-dd HH:mm:ss'),
      batch_id:this.batch.batchId,
      course_name: course_name1,
      trainer_name: trainer_name1,
      backup_trainer_name: backup_trainer_name1
      }

      this.addToTable.push(trainerAllocation);
      if(this.addToTable.length>0)
      {
        this.var3=true;
      }
      this.TrainerAllocationForm = this.fb.group({
        trainer_id: '',
        course_id: '',
        backup_trainer_id: '',
        startTime: this.date,
        endTime: this.date1,
        comment: ''
      });
      this.cid=null;
      this.tid=null;
  
      

  }
  deleteRow(t:number)
  {
    console.log
    this.addToTable.splice(t,1);
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
    
    // let trainerAllocation={
    // trainer_allocation_id:this.TrainerAllocationForm.value.trainer_allocation_id,
    // course_id:this.TrainerAllocationForm.value.course_id,
    // trainer_id:this.TrainerAllocationForm.value.trainer_id,
    // backup_trainer_id:this.TrainerAllocationForm.value.backup_trainer_id,
    // comment:this.TrainerAllocationForm.value.comment,
    // startTime:this.datePipe.transform(this.TrainerAllocationForm.value.startTime, 'yyyy-MM-dd HH:mm:ss'),
    // endTime:this.datePipe.transform(this.TrainerAllocationForm.value.endTime, 'yyyy-MM-dd HH:mm:ss')
    // }
    // console.log(trainerAllocation);
    // console.log(this.TrainerAllocationForm.value);
    console.log(this.existingBatchSelected);
    if(this.existingBatchSelected)
    {
      this.service.updateTimesheetForBatch(this.addToTable,this.selectedBatch).subscribe(data=>
        {
          this.ngOnInit();
          alert("Time Sheet Updated sucessfully for batch "+this.batchName);
        });
    }
    else
    {
      this.service.addSession(this.addToTable).subscribe(data=>
        {
          this.ngOnInit();
          alert(" Timesheet Submitted successfully for batch "+this.batch.batchName);
        });
  
    }

  }



}
