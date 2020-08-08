import { TestBed } from '@angular/core/testing';

import { BoxDataService } from './box-data.service';

describe('BoxDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoxDataService = TestBed.get(BoxDataService);
    expect(service).toBeTruthy();
  });
});
