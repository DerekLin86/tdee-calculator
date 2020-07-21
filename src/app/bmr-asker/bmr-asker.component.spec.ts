import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmrAskerComponent } from './bmr-asker.component';

describe('BmrAskerComponent', () => {
  let component: BmrAskerComponent;
  let fixture: ComponentFixture<BmrAskerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmrAskerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmrAskerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
