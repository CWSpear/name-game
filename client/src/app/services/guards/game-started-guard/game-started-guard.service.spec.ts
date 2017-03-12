import { TestBed, inject } from '@angular/core/testing';

import { GameStartedGuard } from './game-started-guard.service';

describe('GameStartedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameStartedGuard]
    });
  });

  it('should ...', inject([GameStartedGuard], (service: GameStartedGuard) => {
    expect(service).toBeTruthy();
  }));
});
