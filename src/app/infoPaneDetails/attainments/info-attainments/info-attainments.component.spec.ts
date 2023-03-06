import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAttainmentsComponent } from './info-attainments.component';

describe('InfoAttainmentsComponent', () => {
  let component: InfoAttainmentsComponent;
  let fixture: ComponentFixture<InfoAttainmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAttainmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAttainmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
