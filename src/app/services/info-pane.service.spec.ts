import { TestBed } from '@angular/core/testing';

import { InfoPaneService } from './info-pane.service';

describe('InfoPaneService', () => {
  let service: InfoPaneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoPaneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
