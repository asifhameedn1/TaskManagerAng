import { TaskFilterPipe } from './task-filter.pipe';
// import { pipe } from '@angular/core/src/render3/pipe';
import { Task } from 'src/app/Models/Task';

const tasks: Task[] = [{
  id: 2,
  taskName: 'Methods', parentID: 1,
  priority: 11, parentName: 'Testdata1', startDate: new Date(2015, 9, 22), endDate: new Date(2018, 9, 22), status: true
},
{
  id: 1,
  taskName: 'TestData', parentID: 0,
  priority: 15, parentName: 'Methods', startDate: new Date(2015, 9, 21), endDate: new Date(2018, 9, 25), status: true
}];

describe('TaskFilterPipe', () => {
  const pipe = new TaskFilterPipe();

  it('create an instance', () => {
    // const pipe = new TaskFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('Pipe search task', () => {
    const len = pipe.transform(tasks, 'Methods', undefined, undefined, undefined, undefined, undefined, undefined).length;
    expect(len).toEqual(1);
  });

  it('Pipe with parent id', () => {
    const len = pipe.transform(tasks, undefined, undefined, 'Methods', undefined, undefined, undefined, undefined).length;
    expect(len).toEqual(1);
  });

  it('Pipe with priority from and to', () => {
    const len = pipe.transform(tasks, undefined, undefined, undefined, 1, 12, undefined, undefined).length;
    expect(len).toEqual(1);
  });

  it('Pipe with start date', () => {
    const len = pipe.transform(tasks, undefined, undefined, undefined, undefined, undefined, new Date(2015, 9, 22), undefined).length;
    expect(len).toEqual(1);
  });

  it('Pipe with end date', () => {
    const len = pipe.transform(tasks, undefined, undefined, undefined, undefined, undefined, undefined, new Date(2018, 9, 22)).length;
    expect(len).toEqual(1);
  });
});
