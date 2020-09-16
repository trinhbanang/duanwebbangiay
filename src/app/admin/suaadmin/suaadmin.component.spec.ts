import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaadminComponent } from './suaadmin.component';

describe('SuaadminComponent', () => {
  let component: SuaadminComponent;
  let fixture: ComponentFixture<SuaadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
