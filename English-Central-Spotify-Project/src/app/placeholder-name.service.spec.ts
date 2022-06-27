import { TestBed } from '@angular/core/testing';

import { PlaceholderNameService } from './placeholder-name.service';

describe('PlaceholderNameService', () => {
  let service: PlaceholderNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceholderNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
