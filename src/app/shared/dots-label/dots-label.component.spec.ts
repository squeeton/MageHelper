import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotsLabelComponent } from './dots-label.component';

describe('DotsLabelComponent', () => {
  let component: DotsLabelComponent;
  let fixture: ComponentFixture<DotsLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotsLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotsLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
