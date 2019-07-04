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
    backupTrainer:Trainer;
    comment:string;
    start_time:Date;
    end_time:Date;
    batch_id:number;
}
export class Batch
{
    batchId:number;
    batchName:string;
    batchYear:number;
    trainerAllocation:TrainerAllocation[];
    constructor(batchName:string)
    {
        this.batchId=null;
        this.batchName=batchName;
        this.batchYear=null;
        this.trainerAllocation=[];
    }
}