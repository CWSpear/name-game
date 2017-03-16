import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GameStartedGuard } from './game-started-guard.service';
import { Game } from '../../models/game/game.service';
import { Feathers } from '../../feathers/feathers.service';

describe('GameStartedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        GameStartedGuard,
        Game,
        Feathers,
      ],
    });
  });

  it('should ...', inject([GameStartedGuard], (service: GameStartedGuard) => {
    expect(service).toBeTruthy();
  }));
});
