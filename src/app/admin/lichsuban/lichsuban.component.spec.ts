import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichsubanComponent } from './lichsuban.component';

describe('LichsubanComponent', () => {
  let component: LichsubanComponent;
  let fixture: ComponentFixture<LichsubanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichsubanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichsubanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
