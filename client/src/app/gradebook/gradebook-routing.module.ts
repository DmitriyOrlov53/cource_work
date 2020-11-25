import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradebookComponent } from './gradebook.component';

const routes: Routes = [{
  path: '',
  component: GradebookComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradebookRoutingModule { }
