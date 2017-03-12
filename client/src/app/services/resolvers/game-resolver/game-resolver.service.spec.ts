import { TestBed, inject } from '@angular/core/testing';

import { GameResolver } from './game-resolver.service';

describe('GameStartedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameResolver]
    });
  });

  it('should ...', inject([GameResolver], (service: GameResolver) => {
    expect(service).toBeTruthy();
  }));
});
