import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPraxisComponent } from './info-praxis.component';

describe('InfoPraxisComponent', () => {
  let component: InfoPraxisComponent;
  let fixture: ComponentFixture<InfoPraxisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPraxisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPraxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
