import { Component, OnInit } from '@angular/core';
import { Task } from '../../Models/Task';
import { listener } from '@angular/core/src/render3/instructions';
import { ParentTasks } from '../../Models/ParentTasks';
import { TaskserviceService } from '../../Services/taskservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  Parents: ParentTasks[];
  ID: number;
  message: string;
  task: Task;

  constructor(private _taskService: TaskserviceService, private _route: ActivatedRoute) {
    this.task = new Task();
    //   this.list = this.tasks.map(o => {
    //   return { Task: o.TaskName, ParentID: o.ID };
    // });
  }
  ngOnInit() {
    this._route.params.subscribe(params => {
      this.ID = params['id'];
    });
    this._taskService.getParents().subscribe(parents => {
      this.Parents = parents;
    });
    if (this.ID !== undefined) {
      this._taskService.getTaskById(this.ID).subscribe(
        (items) => {
          this.task.taskName = items.taskName;
          this.task.parentID = items.parentID;
          this.task.priority = items.priority;
          this.task.id = this.ID;
          this.task.startDate = items.startDate;
          this.task.endDate = items.endDate;
          console.log(this.task.taskName);
        });
    }
    // this.getParents();
  }

  // getParents() {
  //   this.Parents = this._taskService.getParents();
  // }

  submitTask() {

    if (this.task.startDate > this.task.endDate) {
      this.message = 'Start Date is greater than End Date';
      console.log(this.message);
    } else {
      if (this.task.id !== undefined) {
        this._taskService.putTask(this.task).subscribe(item => {
          this.task = item;
          this.message = 'updated successfully!';
        });
      } else {
        this._taskService.postTask(this.task).subscribe(item => {
          this.task = item;
          this.message = 'inserted successfully!';
        });
      }
      // alert(this.TaskName + ' ' + this.Priority + this.ParentID + 'Str' + this.StartDate + 'End' + this.EndDate);
    }
  }
}
