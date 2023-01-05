import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsTabComponent } from './stats-tab.component';

describe('StatsTabComponent', () => {
  let component: StatsTabComponent;
  let fixture: ComponentFixture<StatsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
