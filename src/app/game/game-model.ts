export default class Game {
    id: string = null;
    name: string = null;

    constructor(game: {}) {
        for (let prop of this._getProperties()) {
            this[prop] = game[prop];
        }
    }

    toObject(): {} {
        const obj = {};

        for (let prop of this._getProperties()) {
            obj[prop] = this[prop];
        }

        return obj;
    }

    private _getProperties(): string[] {
        return Object.getOwnPropertyNames(this);
    }

}
