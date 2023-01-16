import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSingleConditionComponent } from './info-single-condition.component';

describe('InfoSingleConditionComponent', () => {
  let component: InfoSingleConditionComponent;
  let fixture: ComponentFixture<InfoSingleConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSingleConditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSingleConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
