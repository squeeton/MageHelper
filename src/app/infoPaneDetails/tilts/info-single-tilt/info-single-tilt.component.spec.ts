import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSingleTiltComponent } from './info-single-tilt.component';

describe('InfoSingleTiltComponent', () => {
  let component: InfoSingleTiltComponent;
  let fixture: ComponentFixture<InfoSingleTiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSingleTiltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSingleTiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
