import { Injectable } from '@angular/core';

import * as feathers from 'feathers/client';
import * as socketio from 'feathers-socketio/client';
import * as io from 'socket.io-client';

import { environment } from '../../../environments/environment';

@Injectable()
export class Feathers {
  client: feathers.Application;

  constructor() {
    const socket = io(environment.serverUrl);
    const client = feathers();

    client.configure(socketio(socket));

    this.client = client;
  }
}
