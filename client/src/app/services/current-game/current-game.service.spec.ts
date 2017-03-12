import { TestBed, inject } from '@angular/core/testing';

import { CurrentGame } from './current-game.service';

describe('CurrentGame', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentGame]
    });
  });

  it('should ...', inject([CurrentGame], (service: CurrentGame) => {
    expect(service).toBeTruthy();
  }));
});
