import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPaneComponent } from './info-pane.component';

describe('InfoPaneComponent', () => {
  let component: InfoPaneComponent;
  let fixture: ComponentFixture<InfoPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
