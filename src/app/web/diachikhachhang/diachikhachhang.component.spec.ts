import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiachikhachhangComponent } from './diachikhachhang.component';

describe('DiachikhachhangComponent', () => {
  let component: DiachikhachhangComponent;
  let fixture: ComponentFixture<DiachikhachhangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiachikhachhangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiachikhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
