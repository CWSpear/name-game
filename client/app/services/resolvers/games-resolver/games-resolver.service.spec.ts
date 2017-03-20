import { TestBed, inject } from '@angular/core/testing';

import { GamesResolver } from './games-resolver.service';
import { Game } from '../../models/game/game.service';
import { Feathers } from '../../feathers/feathers.service';

describe('GamesResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GamesResolver,
        Game,
        Feathers,
      ],
    });
  });

  it('should ...', inject([GamesResolver], (service: GamesResolver) => {
    expect(service).toBeTruthy();
  }));
});
