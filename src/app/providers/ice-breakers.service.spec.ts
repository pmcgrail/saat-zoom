import { TestBed } from '@angular/core/testing';

import { IceBreakersService } from './ice-breakers.service';

describe('IceBreakersService', () => {
  let service: IceBreakersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IceBreakersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
