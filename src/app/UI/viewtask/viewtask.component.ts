import { Component, OnInit } from '@angular/core';
import { Task } from '../../Models/Task';
import { ParentTasks } from '../../Models/ParentTasks';
import { forEach } from '@angular/router/src/utils/collection';
import { TaskserviceService } from '../../Services/taskservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
  tasks: Task[];
  taskData: Task[];
  Parents: ParentTasks[];
  temp = [];
  searchTask: string;
  parentName: string;
  parentID: number;
  parent: ParentTasks;
  constructor(private _taskservice: TaskserviceService, private _router: Router) {
  }

  ngOnInit() {
    // this._router.navigate(['/viewtask']);
    this.parentID = 0;
    this.parentName = '';
    this.parent = new ParentTasks();
    this.getParents();
    this._taskservice.getTasks()
      .subscribe((Items) => {
        this.tasks = Items;
        this.taskData = this.tasks;
        console.log(this.tasks);
      });
  }

  getParents() {
    this._taskservice.getParents().subscribe(parents => {
      this.Parents = parents;
    });
  }

  // getTasks() {
  //   // this.tasks = this._taskservice.getTasks();
  // }

  // taskFilter() {
  //   this.temp = [];
  //   this.tasks = this.taskData;
  //   if (this.searchTask !== undefined) {
  //     this.tasks.forEach(item => {
  //       if (item.taskName.indexOf(this.searchTask) > -1) {
  //         this.temp.push(item);
  //       }
  //     });
  //   }

  //   if (this.parentName !== undefined && this.parentName !== '0') {
  //     console.log(this.parentName);
  //     if (this.temp.length !== 0) {
  //       this.tasks = this.temp;
  //       this.temp = [];
  //     }
  //     this.tasks.forEach(item => {
  //       if (item.parentName.indexOf(this.parentName) > -1) {
  //         this.temp.push(item);
  //       }
  //     });
  //   }

  //   if (this.temp.length !== 0) {
  //     this.tasks = this.temp;
  //   }

  //   // this.tasks.forEach(item => {
  //   //   if (item.parentName.indexOf(this.parentName) > -1) {
  //   //     this.temp.push(item);
  //   //   }
  //   // });

  //   // this.tasks = Object.assign([], this.taskData).filter(
  //   //   item => item.taskname.toLowerCase().indexOf(this.searchTask.toLowerCase()) > -1);

  //   // this.temp = Object.assign([], this.tasks).filter(
  //   //   item => item.parentid === this.ParentID);

  //   // this.tasks = this.temp;
  //   // this.tasks.filter(
  //   //   item => {
  //   //   item.TaskName.search(this.TaskName);
  //   // });
  // }

  deleteTask(Id: number) {
    // const removeIndex = this.tasks.map(function (item) { return item.id; }).indexOf(Id);
    // this.tasks.splice(removeIndex, 1);

    let removeIndex: number;
    removeIndex = 0;
    this.tasks.forEach(item => {
      if (item.id !== Id) {
        removeIndex++;
      }
    });
     this.tasks.splice(removeIndex, 1);

    this._taskservice.deleteTask(Id).subscribe((obj) => {
      this._router.navigate(['/viewtask']);
      console.log('delete');
    });
  }

  // parentChange(value: any) {
  //   console.log( value);

  //   this.parent = this.Parents.filter(p => p.parentID === Number(value))[0];
  //   console.log(this.parent);
  //   console.log(this.parent.parentName);
  // }
}
