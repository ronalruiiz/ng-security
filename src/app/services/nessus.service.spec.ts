import { TestBed } from '@angular/core/testing';

import { NessusService } from './nessus.service';

describe('NessusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NessusService = TestBed.get(NessusService);
    expect(service).toBeTruthy();
  });
});
