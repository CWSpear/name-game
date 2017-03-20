import { TestBed, inject } from '@angular/core/testing';

import { Player } from './player.service';
import { Feathers } from '../../feathers/feathers.service';

describe('Player', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Player,
        Feathers,
      ],
    });
  });

  it('should ...', inject([Player], (service: Player) => {
    expect(service).toBeTruthy();
  }));
});
