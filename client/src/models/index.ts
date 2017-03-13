import * as _ from 'lodash';
import * as superagent from 'superagent';
import * as feathers from 'feathers/client';
// import * as hooks from 'feathers-hooks/client';
import * as rest from 'feathers-rest/client';
import * as socketio from 'feathers-socketio/client';
import * as io from 'socket.io-client';

import { IGame, IPlayer } from '../../types';

// @TODO get path dynamically
const socket = io('https://namegame.cwspear.ninja/');
export const client = feathers();

// client.configure(rest('http://localhost:7331').superagent(superagent));

client.configure(socketio(socket));

export const gameService = client.service<IGame>('api/games');
export const playerService = client.service<IPlayer>('api/players');

