export class Course
{
    course_id:number;
    course_name:string;
}
export class Trainer
{
    trainer_id:number;
    trainer_name:string;
}
export class TrainerAllocation
{
    trainer_allocation_id:number;
    course:Course;
    trainer:Trainer
    backup_trainer:Trainer;
    comment:string;
    start_time:Date;
    end_time:Date;
}