import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachthanhvienComponent } from './danhsachthanhvien.component';

describe('DanhsachthanhvienComponent', () => {
  let component: DanhsachthanhvienComponent;
  let fixture: ComponentFixture<DanhsachthanhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachthanhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachthanhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
