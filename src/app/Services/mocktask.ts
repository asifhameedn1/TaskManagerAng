import { ParentTasks } from '../Models/ParentTasks';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Task } from '../Models/Task';
import { TaskserviceService } from './taskservice.service';
import { of } from 'rxjs';

export class MockTask extends TaskserviceService {
    // constructor(private http: HttpClient) {
    // }

    constructor() {
        super(null);
      }
    getParents(): Observable<ParentTasks[]> {
        const parent: ParentTasks[] = [
            { parentID: 1, parentName: 'Method2' },
            { parentID: 2, parentName: 'Method1' }
        ];

        const parents: Observable<ParentTasks[]> = of(parent);

        return parents;
    }

    getTasks(): Observable<Task[]> {
        const tasks: Task[] = [{
            id: 2,
            taskName: 'Methods', parentID: 1,
            priority: 11, parentName: '', startDate: new Date(2015, 9, 22), endDate: new Date(2018, 9, 22), status: true
        },
        {
            id: 1,
            taskName: 'TestData', parentID: 0,
            priority: 11, parentName: '', startDate: new Date(2015, 9, 22), endDate: new Date(2018, 9, 22), status: true
        }];
        const task: Observable<Task[]> = of(tasks);

        return task;
    }

    getTaskById(Id: number): Observable<Task> {
        const task: Observable<Task> = of(
            {
                id: 1,
                taskName: 'TestData', parentID: 0,
                priority: 11, parentName: '', startDate: new Date(2015, 9, 22), endDate: new Date(2018, 9, 22), status: true
            }
        );
        return task;
    }

    postTask(task: Task): Observable<Task> {
        const tasks: Observable<Task> = of(
            {
                id: 1,
                taskName: 'TestData', parentID: 0,
                priority: 11, parentName: '', startDate: new Date(2015, 9, 22), endDate: new Date(2018, 9, 22), status: true
            }
        );
        return tasks;
    }

    putTask(task: Task): Observable<Task> {
        const tasks: Observable<Task> = of(
            {
                id: 1,
                taskName: 'TestData', parentID: 0,
                priority: 11, parentName: '', startDate: new Date(2015, 9, 22), endDate: new Date(2018, 9, 22), status: true
            }
        );
        return tasks;
    }

    deleteTask(id: number): Observable<Task> {
        let tasks: Task[] = [
            {
                id: 1,
                taskName: 'TestData', parentID: 0,
                priority: 11, parentName: '', startDate: new Date(2015, 9, 22), endDate: new Date(2018, 9, 22), status: true
            },
            {
                id: 2,
                taskName: 'methods', parentID: 0,
                priority: 11, parentName: '', startDate: new Date(2015, 9, 22), endDate: new Date(2018, 9, 22), status: true
            }];
        tasks =  Object.assign([], tasks).filter(item => item.id !== id);
        return of(tasks[0]);
    }
}
