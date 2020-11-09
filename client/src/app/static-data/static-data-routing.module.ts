import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticDataComponent } from './static-data.component';

const routes: Routes = [
  {
    path: '',
    component: StaticDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticDataRoutingModule { }
