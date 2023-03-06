import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAttainmentListComponent } from './info-attainment-list.component';

describe('InfoAttainmentListComponent', () => {
  let component: InfoAttainmentListComponent;
  let fixture: ComponentFixture<InfoAttainmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAttainmentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAttainmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
