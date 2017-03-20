import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material';

import { NewGameComponent } from './new-game.component';
import { Game } from '../services/models/game/game.service';
import { Feathers } from '../services/feathers/feathers.service';
import { UserService } from '../services/user/user.service';

describe('NewGameComponent', () => {
  let component: NewGameComponent;
  let fixture: ComponentFixture<NewGameComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          RouterTestingModule,
          MaterialModule,
        ],
        declarations: [
          NewGameComponent,
        ],
        providers: [
          Game,
          Feathers,
          UserService,
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
