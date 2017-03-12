import { TestBed, inject } from '@angular/core/testing';

import { GamesResolver } from './games-resolver.service';

describe('GamesResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamesResolver]
    });
  });

  it('should ...', inject([GamesResolver], (service: GamesResolver) => {
    expect(service).toBeTruthy();
  }));
});
