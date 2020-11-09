import { Component } from '@angular/core';
import { MinRowComponent } from '../row';

@Component({
  selector: 'app-grid-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.sass']
})
export class RowComponent extends MinRowComponent {
  getClasses(): string[] {
    return [
      `row_${this.size}`,
      ...super.getClasses()
    ];
  }
}
