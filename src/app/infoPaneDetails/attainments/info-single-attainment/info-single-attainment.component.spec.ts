import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSingleAttainmentComponent } from './info-single-attainment.component';

describe('InfoSingleAttainmentComponent', () => {
  let component: InfoSingleAttainmentComponent;
  let fixture: ComponentFixture<InfoSingleAttainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSingleAttainmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSingleAttainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
