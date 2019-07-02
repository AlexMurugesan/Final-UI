import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup} from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../../shared.service';
import { Course } from './interfaces_req';
import { element } from 'protractor';


@Component({
  selector: 'app-cmanage',
  templateUrl: './cmanage.component.html',
  styleUrls: ['./cmanage.component.css']
})
export class CmanageComponent implements OnInit {

  courseList: Course[] = [];
  courseObj: Course = new Course(null,null);
  courseName: string = null;
  alreadyPresent = false;
  toDelete: boolean = true;
  constructor(private fb: FormBuilder, private service: SharedService) { }

  ngOnInit() {
    this.service.getCourses().subscribe(data => {
      this.courseList = data;
    });
  }

  deleteCourse(cid: number) {
    this.service.deleteCourse(cid).subscribe(data => {
      console.log("Delete Response"+data)
      this.ngOnInit();
      alert("Deleted successfully");
    },err=>{
      console.log(err.status)
      alert("Course Associated with Trainer.Can't Delete Course");    
    });
  }

  submit() {

    this.courseObj.course_id = null;
    this.courseObj.course_name = this.courseName;
    this.courseList.forEach(element => {
      if (this.courseName == element.course_name) {
        this.alreadyPresent = true;
      }
    });
    if (this.alreadyPresent == false) {
      this.service.addCourse(this.courseObj).subscribe(data => {
        this.ngOnInit();
        this.courseName = "";
        alert("Submitted successfully");
      });

    }
    else {
      alert("Can't add duplicate course names");
    }

  }

}