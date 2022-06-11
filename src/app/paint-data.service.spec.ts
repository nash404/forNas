import { TestBed } from '@angular/core/testing';

import { PaintDataService } from './paint-data.service';

describe('PaintDataService', () => {
  let service: PaintDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaintDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
