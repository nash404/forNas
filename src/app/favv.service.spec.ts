import { TestBed } from '@angular/core/testing';

import { FavvService } from './favv.service';

describe('FavvService', () => {
  let service: FavvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
