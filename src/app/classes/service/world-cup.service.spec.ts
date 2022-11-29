import { TestBed } from '@angular/core/testing';

import { WorldCapService } from './world-cup.service';

describe('WorldCapService', () => {
  let service: WorldCapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldCapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
