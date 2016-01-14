import {Injectable} from 'angular2/core';
import LiveList from '../lib/live-list';
import Game from './game-model';

@Injectable()
export default class GameList extends LiveList {
    list: Array<Game>;

    private _currentGameId: String;
    private _storage: Storage = new Storage('nameGame:game');
    private _gamesOwned: Array<String> = this._storage.get('gamesOwned', []);

    constructor() {
        super('games');
    }

    addToGamesOwned(id: String): void {
        this._gamesOwned.push(id);
        this._storage.set('gamesOwned', this._gamesOwned);
    }

    isOwner(id: String = this._currentGameId) {
        return this._gamesOwned.indexOf(id) > -1;
    }

    set currentGameId(val) {
        this._storage.set('currentGameId', val);
        this._currentGameId = val;
    }

    get currentGameId() {
        if (!this._currentGameId) {
            this._currentGameId = this._storage.get('currentGameId') || '';
        }

        return this._currentGameId;
    }
}

class Storage {
    constructor(public namespace: String = 'banana') {}

    get(key, defaultVal = null) {
        const str = window.localStorage.getItem(`${this.namespace}:${key}`);
        return JSON.parse(str) || defaultVal;
    }

    set(key, val) {
        const str = JSON.stringify(val);
        window.localStorage.setItem(`${this.namespace}:${key}`, str);
    }
}
