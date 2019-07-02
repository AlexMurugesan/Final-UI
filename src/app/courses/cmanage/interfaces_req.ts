export class Course
{
    course_id:number;
    course_name:string;
    constructor(a:number,b:string)
    {
        this.course_id=a;
        this.course_name=b;
    }
}
export class specialCourse
{
    [key:string]: Course;
}
export class Trainer
{
    trainerId:number;
    trainerName:string;
    courses:Course[];
    constructor(trainerName:string,courses:Course[])
    {
        this.trainerId=null;
        this.trainerName=trainerName;
        this.courses=courses;
    }
}
