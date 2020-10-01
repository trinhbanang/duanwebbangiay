import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamkhuyenmaiComponent } from './sanphamkhuyenmai.component';

describe('SanphamkhuyenmaiComponent', () => {
  let component: SanphamkhuyenmaiComponent;
  let fixture: ComponentFixture<SanphamkhuyenmaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanphamkhuyenmaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanphamkhuyenmaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
