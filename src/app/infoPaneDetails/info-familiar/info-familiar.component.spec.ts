import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFamiliarComponent } from './info-familiar.component';

describe('InfoFamiliarComponent', () => {
  let component: InfoFamiliarComponent;
  let fixture: ComponentFixture<InfoFamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFamiliarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
