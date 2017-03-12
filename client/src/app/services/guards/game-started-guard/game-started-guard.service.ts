import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CurrentGame } from '../../current-game/current-game.service';
import { GameService } from '../../models/game/game.service';

@Injectable()
export class GameStartedGuard implements CanActivate {
  constructor(private currentGame: CurrentGame, private gameService: GameService, private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<boolean> {
    const id = route.params['id'];
    if (!this.currentGame.game || this.gameService.currentGameId !== id) {
      await this.gameService.setCurrentGameId(id);
    }

    if (this.currentGame.game.started) {
      this.router.navigate(['games', id, 'play']);
      return false;
    }

    return true;
  }
}
