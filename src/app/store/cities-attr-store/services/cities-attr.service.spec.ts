import { TestBed } from '@angular/core/testing';

import { CitiesAttrService } from './cities-attr.service';

describe('CitiesAttrService', () => {
  let service: CitiesAttrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitiesAttrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
