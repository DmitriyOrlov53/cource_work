import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  NbLayoutModule,
  NbCardModule,
  NbInputModule,
  NbButtonModule,
  NbIconModule,
  NbAlertModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AuthenticationRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { GridModule } from '../grid/grid.module';
import { AuthenticationService } from './auth.service';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbEvaIconsModule,
    GridModule,
    NbIconModule,
    NbAlertModule,
    NbSpinnerModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthModule {}
