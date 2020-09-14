import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuathanhvienComponent } from './suathanhvien.component';

describe('SuathanhvienComponent', () => {
  let component: SuathanhvienComponent;
  let fixture: ComponentFixture<SuathanhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuathanhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuathanhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
