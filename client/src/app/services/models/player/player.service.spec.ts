import { TestBed, inject } from '@angular/core/testing';

import { Player } from './player.service';

describe('Player', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Player]
    });
  });

  it('should ...', inject([Player], (service: Player) => {
    expect(service).toBeTruthy();
  }));
});
