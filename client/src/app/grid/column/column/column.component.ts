import { Component } from '@angular/core';

import { GridAbstractComponent } from '../../grid-abstract';

@Component({
  selector: 'app-grid-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.sass']
})
export class ColumnComponent extends GridAbstractComponent {
  getClasses() {
    return [
      'column',
      `column_${this.size}`,
      ...super.getClasses()
    ];
  }
}
