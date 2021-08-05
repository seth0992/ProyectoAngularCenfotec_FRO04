import { TestBed } from '@angular/core/testing';

import { SAlertService } from './s-alert.service';

describe('SAlertService', () => {
  let service: SAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
