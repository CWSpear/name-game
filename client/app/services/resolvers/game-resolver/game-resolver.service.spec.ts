import { TestBed, inject } from '@angular/core/testing';

import { GameResolver } from './game-resolver.service';
import { Game } from '../../models/game/game.service';
import { Feathers } from '../../feathers/feathers.service';

describe('GameStartedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameResolver,
        Game,
        Feathers,
      ],
    });
  });

  it('should ...', inject([GameResolver], (service: GameResolver) => {
    expect(service).toBeTruthy();
  }));
});
