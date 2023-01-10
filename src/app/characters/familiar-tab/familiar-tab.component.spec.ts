import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliarTabComponent } from './familiar-tab.component';

describe('FamiliarTabComponent', () => {
  let component: FamiliarTabComponent;
  let fixture: ComponentFixture<FamiliarTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamiliarTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamiliarTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
