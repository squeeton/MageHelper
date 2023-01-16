import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoConditionListComponent } from './info-condition-list.component';

describe('InfoConditionListComponent', () => {
  let component: InfoConditionListComponent;
  let fixture: ComponentFixture<InfoConditionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoConditionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoConditionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
