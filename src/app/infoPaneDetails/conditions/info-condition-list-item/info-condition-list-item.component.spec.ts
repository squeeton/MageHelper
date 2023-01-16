import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoConditionListItemComponent } from './info-condition-list-item.component';

describe('InfoConditionListItemComponent', () => {
  let component: InfoConditionListItemComponent;
  let fixture: ComponentFixture<InfoConditionListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoConditionListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoConditionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
