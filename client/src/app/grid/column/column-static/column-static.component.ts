import { Component } from '@angular/core';

import { GridAbstractComponent } from '../../grid-abstract';

@Component({
  selector: 'app-grid-column-static',
  templateUrl: './column-static.component.html',
  styleUrls: ['./column-static.component.sass']
})
export class ColumnStaticComponent extends GridAbstractComponent {
  getClasses() {
    return [
      'column',
      `column_${this.size}_static`,
      ...super.getClasses()
    ];
  }
}
