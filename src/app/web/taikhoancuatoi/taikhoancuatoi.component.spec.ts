import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaikhoancuatoiComponent } from './taikhoancuatoi.component';

describe('TaikhoancuatoiComponent', () => {
  let component: TaikhoancuatoiComponent;
  let fixture: ComponentFixture<TaikhoancuatoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaikhoancuatoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaikhoancuatoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
