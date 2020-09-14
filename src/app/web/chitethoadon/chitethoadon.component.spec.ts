import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitethoadonComponent } from './chitethoadon.component';

describe('ChitethoadonComponent', () => {
  let component: ChitethoadonComponent;
  let fixture: ComponentFixture<ChitethoadonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitethoadonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitethoadonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
