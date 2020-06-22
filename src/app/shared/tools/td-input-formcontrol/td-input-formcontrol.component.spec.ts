import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdInputFormcontrolComponent } from './td-input-formcontrol.component';

describe('TdInputFormcontrolComponent', () => {
  let component: TdInputFormcontrolComponent;
  let fixture: ComponentFixture<TdInputFormcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdInputFormcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdInputFormcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
