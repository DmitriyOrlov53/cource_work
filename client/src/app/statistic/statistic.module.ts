import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticRoutingModule } from './statistic-routing.module';
import { StatisticComponent } from './statistic.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [StatisticComponent],
  imports: [
    CommonModule,
    StatisticRoutingModule,
    NbCardModule
  ]
})
export class StatisticModule { }
