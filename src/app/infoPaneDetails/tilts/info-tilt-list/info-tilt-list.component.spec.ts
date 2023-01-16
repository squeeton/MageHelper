import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTiltListComponent } from './info-tilt-list.component';

describe('InfoTiltListComponent', () => {
  let component: InfoTiltListComponent;
  let fixture: ComponentFixture<InfoTiltListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTiltListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTiltListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
