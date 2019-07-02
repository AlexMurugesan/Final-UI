import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TrainerAllocation } from './RequiredClasses';

import { ElementRef, TemplateRef } from '@angular/core';
// import {
//   PopupService,
//   PopupRef
// } from '@progress/kendo-angular-popup';
import { SharedService } from '../../shared.service';

const dateFormat = 'dd/MM/yyyy';
@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

    sessions: TrainerAllocation[];
    updateTrainer: TrainerAllocation;
    // private popupRef: PopupRef;


    //isDisabled=true;
    datePipe = new DatePipe('en-US');
    datewiseSessions = new Map<string, TrainerAllocation[]>();

    constructor(private service: SharedService) { }
    ngOnInit() {
        this.service.viewSessions().subscribe(data => {
            this.sessions = data;
            // console.log(this.sessions);
            this.sortSessionsByDate();
            this.createDateWiseSessions();
            // console.log(this.datewiseSessions);
            //this.isDisabled=false;
        })
    }

    public sortSessionsByDate(): void {
        this.sessions.sort((a: TrainerAllocation, b: TrainerAllocation) => {
            return <any>a.start_time - <any>b.start_time;
        });
    }

    public createDateWiseSessions() {
        this.sessions.forEach(element => {
            if (this.datewiseSessions.has(this.datePipe.transform(element.start_time, dateFormat))) {
                this.datewiseSessions.get(this.datePipe.transform(element.start_time, dateFormat)).push(element);
            }
            else {
                this.datewiseSessions.set(this.datePipe.transform(element.start_time, dateFormat), [element]);
            }
        });
    }

    redirectToAdd(tid: number) {
        this.service.getObject(tid).subscribe(data=>
            {
                this.ngOnInit();
            });
        // this.sessions.forEach(data=>this.sessions.pop());
        // this.sessions.forEach(data=>
        //     if(data.trainer_allocation_id==tid){
        //         this.sessions.
        //     }
        //     );
        // this.service.viewSessions().subscribe(data => {
        //     this.sessions = data;
        //     console.log(this.sessions);
        //     this.sortSessionsByDate();
        //     this.createDateWiseSessions();
        //     console.log(this.datewiseSessions);
        //this.isDisabled=false;
        // })
    }

}
