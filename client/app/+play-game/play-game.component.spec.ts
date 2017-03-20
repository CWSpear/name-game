import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { PlayGameComponent } from './play-game.component';
import { Player } from '../services/models/player/player.service';
import { Game } from '../services/models/game/game.service';
import { Feathers } from '../services/feathers/feathers.service';
import { UserService } from '../services/user/user.service';
import { PagerComponent } from '../pager/pager.component';

describe('PlayGameComponent', () => {
  let component: PlayGameComponent;
  let fixture: ComponentFixture<PlayGameComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          RouterTestingModule,
          MaterialModule,
        ],
        declarations: [
          PlayGameComponent,
          PagerComponent,
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
    fixture = TestBed.createComponent(PlayGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
