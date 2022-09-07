import { TestBed } from '@angular/core/testing';

import { TerryLibService } from './terry-lib.service';

describe('TerryLibService', () => {
  let service: TerryLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerryLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
