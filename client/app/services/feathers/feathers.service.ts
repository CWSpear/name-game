import { Injectable } from '@angular/core';

import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';
import io from 'socket.io-client';

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
