import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMeritListComponent } from './info-merit-list.component';

describe('InfoMeritListComponent', () => {
  let component: InfoMeritListComponent;
  let fixture: ComponentFixture<InfoMeritListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMeritListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoMeritListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
