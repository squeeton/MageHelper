import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRotesComponent } from './info-rotes.component';

describe('InfoRotesComponent', () => {
  let component: InfoRotesComponent;
  let fixture: ComponentFixture<InfoRotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoRotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoRotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
