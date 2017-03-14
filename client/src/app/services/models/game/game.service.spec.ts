import { TestBed, inject } from '@angular/core/testing';

import { Game } from './game.service';

describe('Game', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Game]
    });
  });

  it('should ...', inject([Game], (service: Game) => {
    expect(service).toBeTruthy();
  }));
});
