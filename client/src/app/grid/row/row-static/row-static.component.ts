import { Component } from '@angular/core';
import { MinRowComponent } from '../row';

@Component({
  selector: 'app-grid-row-static',
  templateUrl: './row-static.component.html',
  styleUrls: ['./row-static.component.sass']
})
export class RowStaticComponent extends MinRowComponent {
  getClasses(): string[] {
    return [
      `row_${this.size}_static`,
      ...super.getClasses()
    ];
  }
}
