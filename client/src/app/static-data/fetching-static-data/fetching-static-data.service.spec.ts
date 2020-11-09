import { TestBed } from '@angular/core/testing';

import { FetchingStaticDataService } from './fetching-static-data.service';

describe('FetchingStaticDataService', () => {
  let service: FetchingStaticDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchingStaticDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
