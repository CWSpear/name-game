import { Injectable } from '@angular/core';

// import * as superagent from 'superagent';
import * as feathers from 'feathers/client';
// import * as hooks from 'feathers-hooks/client';
// import * as rest from 'feathers-rest/client';
import * as socketio from 'feathers-socketio/client';
import * as io from 'socket.io-client';

@Injectable()
export class FeathersService {
  client: feathers.Application;

  constructor() {
    const socket = io('https://namegame.cwspear.ninja');
    const client = feathers();

    // client.configure(rest('http://localhost:7331').superagent(superagent));

    client.configure(socketio(socket));

    this.client = client;
  }
}
