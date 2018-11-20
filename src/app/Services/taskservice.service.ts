import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Models/Task';
import { ParentTasks } from '../Models/ParentTasks';
import { Observable } from 'rxjs';
// import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const url = 'http://localhost:50247/api/';
@Injectable({
  providedIn: 'root'
})

export class TaskserviceService {

  constructor(private http: HttpClient) {

  }

  getTasks(): Observable<Task[]> {
    return this.http.get<any>(url + 'GetTasks');
  }

  getParents(): Observable<ParentTasks[]> {
    return this.http.get<any>(url + 'GetParents');
  }
  getTaskById(Id: number): Observable<Task> {
    return this.http.get<any>(url + 'GetTaskById/' + Id);
  }

  postTask(task: Task): Observable<Task> {
    return this.http.post<any>(url + 'Task', JSON.stringify(task), httpOptions);
  }

  putTask(task: Task): Observable<Task> {
    return this.http.put<any>(url + 'UpdateTask', JSON.stringify(task), httpOptions);
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<any>(url + 'DeleteTask/' + id, httpOptions);
  }
}

// this.tasks = [
//   {
//     id: 1,
//     taskName: 'TestData', parentID: 0,
//     priority: 11, parentName: '', startDate: new Date(2015, 9, 22), endDate: new Date(2018, 9, 22), status: true
//   },
//   {
//     id: 2,
//     taskName: 'Methods', parentID: 1,
//     priority: 11, parentName: '', startDate: new Date(2015, 9, 22), endDate: new Date(2018, 9, 22), status: true
//   },
//   {
//     id: 1,
//     taskName: 'TestData', parentID: 0,
//     priority: 11, parentName: '', startDate: new Date(2015, 9, 22), endDate: new Date(2018, 9, 22), status: true
//   }];
