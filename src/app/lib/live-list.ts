const merge = require('lodash/object/merge');
const any = require('lodash/collection/any');
const clone = require('lodash/lang/clone');
const feathers = require('feathers-client');

const io = require('socket.io-client');
const socket = io('http://localhost:3030');

const api = feathers().configure(feathers.socketio(socket));

export default class LiveList {
    private api: any;

    constructor(private resource: string, public list: any[] = null) {
        this.resource = resource;
        this.api = new api.Service(resource, api);

        this.registerListeners();

        if (this.list === null) {
            this.list = [];
            this.api.find().then(loaded => {
                merge(this.list, loaded);
            });
        }
    }

    create(item) {
        return this.api.create(item);
    }

    [Symbol.iterator]() {
        let index = -1;
        let data  = this.list;

        return {
            next: () => ({ value: data[++index], done: !(index in data) }),
        };
    }

    get length() {
        return (this.list || []).length;
    }

    private registerListeners() {
        this.api.on('created', item => this.list.push(item));

        this.api.on('removed', item => removeItem(this.list, item));

        this.api.on('updated', item => updateItem(this.list, item));

        this.api.on('patched', () => {
            throw new Error('[patched] events are not yet supported');
        });
    }
}

// helper funtions
function removeItem(array: any[], item: any) {
    const index = indexById(array, item);
    if (index !== -1) return array.splice(index, 1)[0];
}

function updateItem(array: any[], item: any) {
    var index = indexById(array, item);

    if (index !== -1) array[index] = clone(item);
}

function indexById(array: any[], id: any) {
    if (id.id) id = id.id;

    var index = -1;

    // we could use 2 underscore functions to do this, but
    // then it would have to loop through everything twice
    var exists = any(array, function (item) {
        index++;
        return (item.id || item) === id;
    });

    return exists ? index : -1;
}
