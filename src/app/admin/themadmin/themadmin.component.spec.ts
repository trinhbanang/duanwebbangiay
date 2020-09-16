import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemadminComponent } from './themadmin.component';

describe('ThemadminComponent', () => {
  let component: ThemadminComponent;
  let fixture: ComponentFixture<ThemadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
