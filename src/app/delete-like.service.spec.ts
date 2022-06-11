import { TestBed } from '@angular/core/testing';

import { DeleteLikeService } from './delete-like.service';

describe('DeleteLikeService', () => {
  let service: DeleteLikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteLikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
