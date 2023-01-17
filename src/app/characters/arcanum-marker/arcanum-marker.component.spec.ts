import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcanumMarkerComponent } from './arcanum-marker.component';

describe('ArcanumMarkerComponent', () => {
  let component: ArcanumMarkerComponent;
  let fixture: ComponentFixture<ArcanumMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcanumMarkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcanumMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
