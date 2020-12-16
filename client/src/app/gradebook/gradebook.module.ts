import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradebookRoutingModule } from './gradebook-routing.module';
import { GradebookComponent } from './gradebook.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [GradebookComponent],
  imports: [
    CommonModule,
    GradebookRoutingModule,
    NbCardModule
  ]
})
export class GradebookModule { }
