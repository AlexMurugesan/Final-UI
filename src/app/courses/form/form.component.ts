import { Component, OnInit,SimpleChanges } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators ,NgForm} from '@angular/forms';
import {SharedService} from '../../shared.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { Trainer } from '../cmanage/interfaces_req';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   datePipe=new DatePipe('en-US');
  
    public TrainerAllocationForm :FormGroup;
    constructor(private fb: FormBuilder, private service: SharedService) { }
    courses: any=[
      // {"course_id":1,"course_name":"Java"},{"course_id":2,"course_name":"Junit"}
          ];
    trainers:Trainer[];
    trainersDummy:Trainer[]=[];
    keys:any=[];
    cid:number;
    tid:any;

    ngOnInit() {
      this.TrainerAllocationForm = this.fb.group({
        trainer_id : '',
        course_id: '',
        backup_trainer_id:'',
        startTime:'',
        endTime:'',
        comment:''        
      });
      this.service.getList().subscribe(data=> {
        this.courses=data;
      })
      for(const key in this.courses[0])
      {
        this.keys.push(key);
      }
      }
    
    loadTrainers(){
      // console.log(this.cid);
      this.service.getTrainerList(this.cid).subscribe(data => {
        this.trainers=data;
//        console.log(this.trainers);
        // this.trainersDummy=data;
      })
    }
    loadBackUp()
    {
        this.trainers.forEach(element => {
            if(element.trainerId!=this.tid)
              this.trainersDummy.push(element);
        });
        console.log(this.trainersDummy);
    }
  callSubmit()
  {
    this.TrainerAllocationForm.value.startTime=this.datePipe.transform(this.TrainerAllocationForm.value.startTime,'yyyy-MM-dd HH:mm:ss');
    this.TrainerAllocationForm.value.endTime=this.datePipe.transform(this.TrainerAllocationForm.value.endTime,'yyyy-MM-dd HH:mm:ss');

    // let myMoment: moment.Moment = moment(this.TrainerAllocationForm.value.startTime).format('YYYY-mm-DD h:mm:ss');
    // console.log(myMoment);
    // moment(this.TrainerAllocationForm.value.endTime).format('YYYY-mm-DD h:mm:ss');
    // this.TrainerAllocationForm.value.startTime=myMoment;
    this.service.addSession([this.TrainerAllocationForm.value]).subscribe();
    alert("Submitted successfully");

  }
}
