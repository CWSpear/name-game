import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, NgFor} from 'angular2/common';
import {Http} from 'angular2/http';

import {Title} from '../providers/title';

import LiveList from '../lib/live-list';

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
    games:any = [];

    // TypeScript public modifiers
    constructor(public title: Title, public http: Http) {
        this.games = new LiveList('games');
    }

    createNewGame(input) {
        this.games.create({
            id: uuid.v4(),
            name: input.value,
        }).then(() => input.value = '');
    }
}
