import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './UI/add/add.component';
import { ViewtaskComponent } from './UI/viewtask/viewtask.component';

const routes: Routes = [
{path: 'add', component: AddComponent},
{path: 'edit/:id', component: AddComponent},
{path: 'viewtask', component: ViewtaskComponent},
{path: '', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AddComponent, ViewtaskComponent];
