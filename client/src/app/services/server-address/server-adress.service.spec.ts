import { TestBed } from '@angular/core/testing';

import { ServerAdressService } from './server-adress.service';

describe('ServerAdressService', () => {
  let service: ServerAdressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerAdressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
