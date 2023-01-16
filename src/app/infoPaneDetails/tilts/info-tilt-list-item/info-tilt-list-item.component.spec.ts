import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTiltListItemComponent } from './info-tilt-list-item.component';

describe('InfoTiltListItemComponent', () => {
  let component: InfoTiltListItemComponent;
  let fixture: ComponentFixture<InfoTiltListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTiltListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTiltListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
