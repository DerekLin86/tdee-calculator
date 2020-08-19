import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdTipsComponent } from './td-tips.component';

describe('TdTipsComponent', () => {
  let component: TdTipsComponent;
  let fixture: ComponentFixture<TdTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
