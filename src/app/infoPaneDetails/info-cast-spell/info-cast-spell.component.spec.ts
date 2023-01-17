import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCastSpellComponent } from './info-cast-spell.component';

describe('InfoCastSpellComponent', () => {
  let component: InfoCastSpellComponent;
  let fixture: ComponentFixture<InfoCastSpellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCastSpellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCastSpellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
