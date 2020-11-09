import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowComponent } from './row/row/row.component';
import { SpacerComponent } from './spacer/spacer.component';
import { RowStaticComponent } from './row/row-static/row-static.component';
import { ColumnComponent } from './column/column/column.component';
import { ColumnStaticComponent } from './column/column-static/column-static.component';

@NgModule({
  declarations: [
    RowComponent,
    SpacerComponent,
    RowStaticComponent,
    ColumnComponent,
    ColumnStaticComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RowComponent,
    SpacerComponent,
    RowStaticComponent,
    ColumnComponent,
    ColumnStaticComponent

  ]
})
export class GridModule { }
