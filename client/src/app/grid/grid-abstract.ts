import { OnInit, Input, HostBinding, Component } from '@angular/core';

@Component({
  selector: 'app-grid-abstract',
  template: ''
})
export class GridAbstractComponent implements OnInit {
  @Input() size = 12;
  @Input() 'align-items' = 'start';
  @Input() center?: boolean;
  @HostBinding('class') class?: string;
  protected getClasses(): string[] {
    return [
      this.center ? 'center' : '',
      `items-${this['align-items']}`,
    ];
  }
  ngOnInit(): void {
    const oldClassNames = this.class === undefined ? '' : this.class;
    const newClassNames = `${oldClassNames} ${this.getClasses().join(' ')}`;
    newClassNames.trim();
    this.class = newClassNames;
  }
}
