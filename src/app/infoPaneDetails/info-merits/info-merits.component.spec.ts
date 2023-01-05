import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMeritsComponent } from './info-merits.component';

describe('InfoMeritsComponent', () => {
  let component: InfoMeritsComponent;
  let fixture: ComponentFixture<InfoMeritsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMeritsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoMeritsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
