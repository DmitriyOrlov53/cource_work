import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnStaticComponent } from './column-static.component';

describe('ColumnStaticComponent', () => {
  let component: ColumnStaticComponent;
  let fixture: ComponentFixture<ColumnStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
