import { TestBed } from '@angular/core/testing';

import { DlWidgetsService } from './dl-widgets.service';

describe('DlWidgetsService', () => {
  let service: DlWidgetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DlWidgetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
