import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSpellListComponent } from './info-spell-list.component';

describe('InfoSpellListComponent', () => {
  let component: InfoSpellListComponent;
  let fixture: ComponentFixture<InfoSpellListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSpellListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSpellListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
