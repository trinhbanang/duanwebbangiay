import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemthanhvienComponent } from './themthanhvien.component';

describe('ThemthanhvienComponent', () => {
  let component: ThemthanhvienComponent;
  let fixture: ComponentFixture<ThemthanhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemthanhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemthanhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
