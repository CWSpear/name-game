import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material';

import { GameComponent } from './game.component';
import { RedirectDirective } from '../directives/redirect/redirect.directive';
import { Game } from '../services/models/game/game.service';
import { Player } from '../services/models/player/player.service';
import { Feathers } from '../services/feathers/feathers.service';
import { UserService } from '../services/user/user.service';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          RouterTestingModule,
          MaterialModule,
        ],
        declarations: [
          GameComponent,
          RedirectDirective,
        ],
        providers: [
          Game,
          Player,
          Feathers,
          UserService,
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
