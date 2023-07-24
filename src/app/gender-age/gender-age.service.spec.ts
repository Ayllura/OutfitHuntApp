import { TestBed } from '@angular/core/testing';

import { GenderAgeService } from './gender-age.service';

describe('GenderAgeService', () => {
  let service: GenderAgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenderAgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
