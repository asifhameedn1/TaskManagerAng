import { NgModule } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskFilterPipe } from '../../task-filter.pipe';
import { ViewtaskComponent } from './viewtask.component';
import { Task } from '../../Models/Task';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskserviceService } from '../../Services/taskservice.service';
import { MockTask } from '../../Services/mocktask';
import { Router } from '@angular/router';
// import {fakeService} from '';
// const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

// class FakeRouter {
//   navigateByUrl(url: string) { return url; }
// }

describe('ViewtaskComponent', () => {
  let component: ViewtaskComponent;
  let fixture: ComponentFixture<ViewtaskComponent>;
  // let service: TaskserviceService;
//  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, RouterTestingModule],
      declarations: [ViewtaskComponent, TaskFilterPipe],
      providers: [{ provide: TaskserviceService, useClass: MockTask }
        //       , { provide: Router,      useValue: routerSpy }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // router = fixture.debugElement.injector.get(Router);
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, RouterTestingModule],
      declarations: [ViewtaskComponent, TaskFilterPipe],
      providers: [{ provide: TaskserviceService, useClass: MockTask }
  //      , { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(ViewtaskComponent);
    component = fixture.componentInstance;
    // service = new MockTask();
    // //router = routerSpy;
    // router = new FakeRouter() as any as Router;
    // component = new ViewtaskComponent(service, router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load tasks and parents', () => {
    component.ngOnInit();
    expect(component.Parents.length).toBeGreaterThan(0);
    expect(component.taskData.length).toBeGreaterThan(0);
    expect(component.tasks.length).toBeGreaterThan(0);
  });

  it('should load tasks and parents', () => {
    component.getParents();
    expect(component.Parents.length).toBeGreaterThan(0);
  });

  it('should delete task', () => {
    RouterTestingModule.withRoutes([
      { path: 'viewtask', component: ViewtaskComponent }
    ]);
    // router = routerSpy;
    const len = component.taskData.length;
    component.deleteTask(1);
    expect(component.taskData.length).toEqual(len - 1);
    // const spy = router.navigateByUrl as jasmine.Spy;
    // const spy = router.navigateByUrl as jasmine.Spy;
    // console.log(spy);
    // const navArgs = spy.calls.first().args[0];
    // expect(spy).toBe('Expected Function to be undefined.');
    //   expect()
  });
});
