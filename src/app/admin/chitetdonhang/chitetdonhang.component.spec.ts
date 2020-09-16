import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitetdonhangComponent } from './chitetdonhang.component';

describe('ChitetdonhangComponent', () => {
  let component: ChitetdonhangComponent;
  let fixture: ComponentFixture<ChitetdonhangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitetdonhangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitetdonhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
