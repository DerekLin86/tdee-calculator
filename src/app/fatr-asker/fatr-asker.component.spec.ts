import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatrAskerComponent } from './fatr-asker.component';

describe('FatrAskerComponent', () => {
  let component: FatrAskerComponent;
  let fixture: ComponentFixture<FatrAskerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatrAskerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatrAskerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
