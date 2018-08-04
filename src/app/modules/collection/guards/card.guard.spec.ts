import { TestBed, async, inject } from '@angular/core/testing';

import { CardGuard } from './card.guard';

describe('CardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardGuard]
    });
  });

  it('should ...', inject([CardGuard], (guard: CardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
