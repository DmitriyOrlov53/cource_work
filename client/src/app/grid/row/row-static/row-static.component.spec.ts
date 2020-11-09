import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowStaticComponent } from './row-static.component';

describe('RowStaticComponent', () => {
  let component: RowStaticComponent;
  let fixture: ComponentFixture<RowStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
