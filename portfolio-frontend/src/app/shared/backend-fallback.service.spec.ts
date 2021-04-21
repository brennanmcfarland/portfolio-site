import { TestBed } from '@angular/core/testing';

import { BackendFallbackService } from './backend-fallback.service';

describe('BackendFallbackService', () => {
  let service: BackendFallbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendFallbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
