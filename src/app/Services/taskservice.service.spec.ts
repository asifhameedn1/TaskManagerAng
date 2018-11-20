import { TestBed, inject } from '@angular/core/testing';

import { TaskserviceService } from './taskservice.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Task } from '../Models/Task';

describe('TaskserviceService', () => {
const url = 'http://localhost:50247/api/';
  let service: TaskserviceService;
  let httpMock: HttpTestingController;
  let taskData: Task;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskserviceService],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(TaskserviceService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([TaskserviceService], (service: TaskserviceService) => {
    expect(service).toBeTruthy();
  }));

  it('should get the task data', () => {
    service.getTasks().subscribe(tasks => {
      expect(tasks.length > 0);
    });
    const httpReq = httpMock.expectOne(url + 'GetTasks', 'Gets all Tasks');
    expect(httpReq.request.method).toEqual('GET'); // .toBe('GET');
    httpMock.verify();
  });

  it('should get the parents data', () => {
    service.getParents().subscribe(parents => {
      expect(parents.length > 0);
    });
    const httpRequest = httpMock.expectOne(url + 'GetParents', 'Gets all Parents');
    expect(httpRequest.request.method).toEqual('GET');
    httpMock.verify();
  });

  it('should get the task data by id', () => {
    service.getTaskById(1).subscribe(task => {
      expect(task).toBeTruthy();
    });
    const httpTask = httpMock.expectOne(url + 'GetTaskById/1', 'Gets selected task');
    expect(httpTask.request.method).toEqual('GET');
    httpMock.verify();
  });

  it('should post the task data', () => {
    taskData = new Task();
    taskData.taskName = 'TestDatainject';
    taskData.parentID = 2;
    taskData.priority = 4;
    taskData.startDate = new Date(2015, 9, 22);
    taskData.endDate = new Date(2018, 9, 22);
    service.postTask(taskData).subscribe((data: any) => {
      expect(data.parentID).toBe(2);
    });

    const req = httpMock.expectOne(url + 'Task', 'post to api');
    expect(req.request.method).toBe('POST');

    req.flush({
      taskName: 'TestDatainject',
      parentID: 2,
      priority: 4,
      startDate: new Date(2015, 9, 22),
      endDate: new Date(2018, 9, 22)
    });

    httpMock.verify();
  });

  it('should updates the task data', () => {
    taskData = new Task();
    taskData.id = 2;
    taskData.taskName = 'updatesDatainject';
    taskData.parentID = 2;
    taskData.priority = 4;
    taskData.startDate = new Date(2015, 9, 22);
    taskData.endDate = new Date(2018, 9, 22);
    service.putTask(taskData).subscribe((data: any) => {
      expect(data.id).toBe(2);
    });

    const req = httpMock.expectOne(url + 'UpdateTask', 'Updates the task');
    expect(req.request.method).toBe('PUT');

    req.flush({
      id: 2,
      taskName: 'updatesDatainject',
      parentID: 2,
      priority: 4,
      startDate: new Date(2015, 9, 22),
      endDate: new Date(2018, 9, 22)
    });

    httpMock.verify();
  });

  it('should updates the task data', () => {
    service.deleteTask(4).subscribe((data: any) => {
      expect(data).toBe(4);
    });

    const req = httpMock.expectOne(url + 'DeleteTask/4', 'Delete the task');
    expect(req.request.method).toBe('DELETE');

    req.flush(4);

    httpMock.verify();
  });
});
