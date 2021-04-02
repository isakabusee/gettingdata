import { TestBed } from '@angular/core/testing';

import { JSONPlaceholderService } from './jsonplaceholder.service';

describe('JSONPlaceholderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JSONPlaceholderService = TestBed.get(JSONPlaceholderService);
    expect(service).toBeTruthy();
  });
});
