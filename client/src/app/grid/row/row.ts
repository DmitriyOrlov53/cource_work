import { Input, Component } from '@angular/core';

import { GridAbstractComponent } from '../grid-abstract';

@Component({
  selector: 'app-minrow',
  template: ''
})
export class MinRowComponent extends GridAbstractComponent {
    @Input() nowrap?: boolean;
    protected getClasses(): string[] {
      return [
        'row',
        this.nowrap ? 'nowrap' : '',
        ...super.getClasses()
      ];
    }
}
