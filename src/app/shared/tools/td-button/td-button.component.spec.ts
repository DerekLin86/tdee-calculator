import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdButtonComponent } from './td-button.component';

describe('TdButtonComponent', () => {
  let component: TdButtonComponent;
  let fixture: ComponentFixture<TdButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
