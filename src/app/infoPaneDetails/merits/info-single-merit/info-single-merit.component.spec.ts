import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSingleMeritComponent } from './info-single-merit.component';

describe('InfoSingleMeritComponent', () => {
  let component: InfoSingleMeritComponent;
  let fixture: ComponentFixture<InfoSingleMeritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSingleMeritComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSingleMeritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
