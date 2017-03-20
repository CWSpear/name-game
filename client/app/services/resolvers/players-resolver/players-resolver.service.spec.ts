import { TestBed, inject } from '@angular/core/testing';

import { PlayersResolver } from './players-resolver.service';
import { Player } from '../../models/player/player.service';
import { Feathers } from '../../feathers/feathers.service';

describe('PlayersResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlayersResolver,
        Player,
        Feathers,
      ],
    });
  });

  it('should ...', inject([PlayersResolver], (service: PlayersResolver) => {
    expect(service).toBeTruthy();
  }));
});
