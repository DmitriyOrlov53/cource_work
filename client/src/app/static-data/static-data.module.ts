import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticDataRoutingModule } from './static-data-routing.module';
import { StaticDataComponent } from './static-data.component';
import { NbAccordionModule, NbCardModule, NbLayoutModule, NbListModule, NbSpinnerModule } from '@nebular/theme';
import { FetchingStaticDataService } from './fetching-static-data/fetching-static-data.service';


@NgModule({
  declarations: [StaticDataComponent],
  imports: [
    CommonModule,
    StaticDataRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbListModule,
    NbSpinnerModule,
    NbAccordionModule
  ],
  providers: [FetchingStaticDataService]
})
export class StaticDataModule { }
