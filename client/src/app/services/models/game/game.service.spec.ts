import { TestBed, inject } from '@angular/core/testing';

import { Game } from './game.service';
import { Feathers } from '../../feathers/feathers.service';

describe('Game', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Game,
        Feathers,
      ],
    });
  });

  it('should ...', inject([Game], (service: Game) => {
    expect(service).toBeTruthy();
  }));
});
