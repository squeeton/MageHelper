import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSpellsComponent } from './info-spells.component';

describe('InfoSpellsComponent', () => {
  let component: InfoSpellsComponent;
  let fixture: ComponentFixture<InfoSpellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSpellsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
