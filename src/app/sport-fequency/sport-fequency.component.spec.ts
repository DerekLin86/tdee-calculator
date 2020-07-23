import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportFequencyComponent } from './sport-fequency.component';

describe('SportFequencyComponent', () => {
  let component: SportFequencyComponent;
  let fixture: ComponentFixture<SportFequencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportFequencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportFequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
