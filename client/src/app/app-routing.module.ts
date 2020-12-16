import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'static-data',
    loadChildren: () => import('./static-data/static-data.module').then(m => m.StaticDataModule)
  },
  {
    path: 'gradebook',
    loadChildren: () => import('./gradebook/gradebook.module').then(m => m.GradebookModule)
  },
  {
    path: 'statistic',
    loadChildren: () => import('./statistic/statistic.module').then(m => m.StatisticModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
