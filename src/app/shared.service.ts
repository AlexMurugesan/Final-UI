import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course, Trainer } from './courses/cmanage/interfaces_req';
import { TrainerAllocation, Batch } from './courses/view/RequiredClasses';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 

  private _url='http://10.4.14.131:8080/'
  getCourses_url=this._url+'course';
  addCourse_url=this.getCourses_url+"/add"
  deleteCourse_url=this.getCourses_url+"/";
  getTrainers_url=this._url+'trainer';
  deleteTrainer_url=this.getTrainers_url+"/" 
  addSessionURL=this._url+'trainerAllocation';
  addBatch_url=this._url+"batch";
  viewSessionsUrl=this._url+'trainerAllocation';
  deleteRow=this.viewSessionsUrl+'/delete/'

//  sessionCourses=this._url;
  sessionTrainers=this._url+'trainer/course/';

  constructor(private http: HttpClient) {
    }
    
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };  

    public getCourses():Observable<Course[]>
    {
      return this.http.get<Course[]>(this.getCourses_url);
    }

    public addCourse(course:Course)
    {
      return this.http.post(this.addCourse_url,course,this.httpOptions);
    }

    public deleteCourse(cid:number)
    {
      return this.http.delete(this.deleteCourse_url+cid,this.httpOptions);
    }
  
    getTrainers():Observable<Trainer[]>
    {
      return this.http.get<Trainer[]>(this.getTrainers_url);
    }
  
    sendTrainer(Trainer : Trainer)
    {
      return this.http.post(this.getTrainers_url,Trainer,this.httpOptions);
    }

    public deleteTrainer(tid:number)
    {
      console.log(this.deleteTrainer_url+tid)
      return this.http.delete(this.deleteTrainer_url+tid,this.httpOptions);
    }

    addSession(trainerAllocation:any[]) 
    {
      console.log(trainerAllocation);
      return this.http.post(this.addSessionURL,trainerAllocation,this.httpOptions)
    }

    viewSessions():Observable<TrainerAllocation[]>
    {
      return this.http.get<TrainerAllocation[]>(this.viewSessionsUrl);
    }
  
    addBatchName(batchName:string)
    {
      let batch=new Batch(batchName);
      console.log(batch);
      return this.http.post<Batch>(this.addBatch_url,batch,this.httpOptions);
    }
  

  




  getList()
  {
    return this.http.get(this.getCourses_url);
  }
  getTrainerList(cid:number):Observable<Trainer[]>
  {
    
    return this.http.get<Trainer[]>(this.sessionTrainers+cid);
    // console.log(this.sessionTrainers+cid);
  }
  getTrainerAllocation()
  {
    return this.http.get<TrainerAllocation[]>('/assets/Data/trainerAllocation.json');
  }


  getObject(tid:number)
  {
    console.log("I am alex");
     return this.http.delete(this.deleteRow+tid,this.httpOptions);
  }
  getBatches():Observable<Batch[]>
  {
    return this.http.get<Batch[]>(this.addBatch_url);
  }
}
