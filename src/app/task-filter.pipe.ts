import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../app/Models/Task';
import { NgModule } from '@angular/core';
@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(tasks: Task[], searchTask: string, parentID: number, parentName: string, priorityFrom: number,
    priorityTo: number, startDate: Date, endDate: Date): Task[] {
    if (tasks && tasks.length) {
      return tasks.filter(items => {

        if (searchTask && items.taskName.toLowerCase().indexOf(searchTask.toLowerCase()) === -1) {
          return false;
        }
        if (parentName && items.parentName.toLowerCase().indexOf(parentName.toLowerCase()) === -1) {
          return false;
        }
        if (priorityFrom && priorityTo && !(items.priority > priorityFrom && items.priority < priorityTo)) {
          return false;
        }
        if (startDate && items.startDate.toString().indexOf(startDate.toString()) === -1) {
          return false;
        }
        if (endDate && items.endDate.toString().indexOf(endDate.toString()) === -1) {
          return false;
        }
        return true;
      });
    }
  }

}
