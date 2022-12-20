import { TestBed } from '@angular/core/testing';

import { AdminLikesService } from './admin-likes.service';

describe('AdminLikesService', () => {
  let service: AdminLikesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminLikesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
