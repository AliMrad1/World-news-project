import { TestBed } from '@angular/core/testing';

import { WorldCupService } from './world-cup.service';

describe('WorldCapService', () => {
  let service: WorldCupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldCupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
