import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSpecialtiesComponent } from './info-specialties.component';

describe('InfoSpecialtiesComponent', () => {
  let component: InfoSpecialtiesComponent;
  let fixture: ComponentFixture<InfoSpecialtiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSpecialtiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSpecialtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
