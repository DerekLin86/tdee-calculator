import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdRadioButtonGroupComponent } from './td-radio-button-group.component';

describe('TdRadioButtonGroupComponent', () => {
  let component: TdRadioButtonGroupComponent;
  let fixture: ComponentFixture<TdRadioButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdRadioButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdRadioButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
