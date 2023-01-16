import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSingleSpellComponent } from './info-single-spell.component';

describe('InfoSingleSpellComponent', () => {
  let component: InfoSingleSpellComponent;
  let fixture: ComponentFixture<InfoSingleSpellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSingleSpellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSingleSpellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
