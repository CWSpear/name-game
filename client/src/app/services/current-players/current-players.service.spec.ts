import { TestBed, inject } from '@angular/core/testing';

import { CurrentPlayers } from './current-players.service';

describe('CurrentPlayers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentPlayers]
    });
  });

  it('should ...', inject([CurrentPlayers], (service: CurrentPlayers) => {
    expect(service).toBeTruthy();
  }));
});
