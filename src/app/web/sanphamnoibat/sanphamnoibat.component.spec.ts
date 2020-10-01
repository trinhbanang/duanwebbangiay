import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamnoibatComponent } from './sanphamnoibat.component';

describe('SanphamnoibatComponent', () => {
  let component: SanphamnoibatComponent;
  let fixture: ComponentFixture<SanphamnoibatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanphamnoibatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanphamnoibatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
