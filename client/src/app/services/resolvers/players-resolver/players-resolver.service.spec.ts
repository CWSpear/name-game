import { TestBed, inject } from '@angular/core/testing';

import { PlayersResolver } from './players-resolver.service';

describe('PlayersResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayersResolver]
    });
  });

  it('should ...', inject([PlayersResolver], (service: PlayersResolver) => {
    expect(service).toBeTruthy();
  }));
});
