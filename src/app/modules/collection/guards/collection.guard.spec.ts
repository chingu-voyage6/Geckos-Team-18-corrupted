import { TestBed, async, inject } from '@angular/core/testing';

import { CollectionGuard } from './collection.guard';

describe('CollectionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectionGuard]
    });
  });

  it('should ...', inject([CollectionGuard], (guard: CollectionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
