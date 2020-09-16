import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachadminComponent } from './danhsachadmin.component';

describe('DanhsachadminComponent', () => {
  let component: DanhsachadminComponent;
  let fixture: ComponentFixture<DanhsachadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
