import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, NgFor} from 'angular2/common';
import {Http} from 'angular2/http';

import {Title} from '../providers/title';

import GameList from '../game/game-list';
import Game from '../game/game-model';

const uuid = require('node-uuid');

@Component({
    selector: 'home',
    directives: [FORM_DIRECTIVES, NgFor],
    providers: [Title],
    pipes: [],
    styles: [require('./home.css')],
    template: require('./home.html')
})
export class Home {
    // TypeScript public modifiers
    constructor(public games:GameList) {}

    createNewGame(input) {
        this.games.create(new Game({
            id: uuid.v4(),
            name: input.value,
        })).then(game => {
            input.value = '';
            this.games.addToGamesOwned(game.id);
        });
    }

    isOwner(id: String) {
        return this.games.isOwner(id);
    }
}
