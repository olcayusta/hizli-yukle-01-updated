import { TestBed } from '@angular/core/testing';

import { LibraryResolverService } from './library-resolver.service';

describe('LibraryResolverService', () => {
  let service: LibraryResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
