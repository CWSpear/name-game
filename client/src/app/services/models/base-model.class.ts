import * as _ from 'lodash';
import { NgZone } from '@angular/core';
import {
  Service,
  Params,
  Application,
  NullableId,
} from 'feathers';
import { HookMap, HooksObject } from 'feathers-hooks';

export enum OneEvents {
  updated,
  patched,
}

export enum ListEvents {
  created,
  updated,
  patched,
  removed,
}

export class BaseModelService<T> implements Service<T> {
  protected service: Service<T>;
  public currentGameId: string;

  constructor(protected zone: NgZone) {}

  on(event: string | symbol, listener: Function): this {
    this.service.on(event, (...result) => {
      this.zone.run(() => listener(...result));
    });

    return this;
  }

  async setCurrentGameId(id: string): Promise<void> {
    this.currentGameId = id;

    return;
  }

  subscribeOne(events: OneEvents[], item: T, matcher?: Function): this {
    events.forEach(event => {
      this.on(OneEvents[event], (data: T) => {
        if (!matcher || matcher(data)) {
          Object.assign(item, data);
        }
      });
    });

    return this;
  }

  subscribeList(events: ListEvents[], list: T[], matcher?: Function): this {
    events.forEach(event => {
      const eventType = ListEvents[event];
      switch (event) {
        case ListEvents.created:
          this.on(eventType, (data: T) => {
            if (!matcher || matcher(data)) {
              list.push(data);
            }
          });
          break;

        case ListEvents.updated:
        case ListEvents.patched:
          this.on(eventType, (data: T) => {
            if (!matcher || matcher(data)) {
              const index = _.findIndex(list, (i) => i['id'] === data['id']);
              _.assign(list[index], data);
            }
          });
          break;

        case ListEvents.removed:
          this.on(eventType, (data: T) => {
            if (!matcher || matcher(data)) {
              // remove mutates
              _.remove(list, (i) => i['id'] === data['id']);
            }
          });
          break;
      }
    });

    return this;
  }

  before(hooks: HookMap) {
    this.service.before(hooks);
  }

  after(hooks: HookMap) {
    this.service.after(hooks);
  }

  hooks(hooks: HooksObject) {
    this.service.hooks(hooks);
  }

  find(params?: Params): Promise<T[]> {
    return this.service.find(params);
  }

  get(id: number|string, params?: Params): Promise<T> {
    return this.service.get(id, params);
  }

  create(data: T, params?: Params): Promise<T> {
    return this.service.create(data, params);
  }

  update(id: NullableId, data: T, params?: Params): Promise<T> {
    return this.service.update(id, data, params);
  }

  patch(id: NullableId, data: any, params?: Params): Promise<T> {
    return this.service.patch(id, data, params);
  }

  remove(id: NullableId, params?: Params): Promise<T> {
    return this.service.remove(id, params);
  }

  setup(app?: Application, path?: string): void {
    this.service.setup(app, path);
  }

  // extend Service<T>'s event emitter methods
  emit(event: string|symbol, ...args: any[]): boolean {
    return this.service.emit(event, ...args);
  }

  addListener(event: string|symbol, listener: Function): this {
    this.service.addListener(event, listener);
    return this;
  }

  once(event: string|symbol, listener: Function): this {
    this.service.once(event, listener);
    return this;
  }

  prependListener(event: string|symbol, listener: Function): this {
    this.service.prependListener(event, listener);
    return this;
  }

  prependOnceListener(event: string|symbol, listener: Function): this {
    this.service.prependOnceListener(event, listener);
    return this;
  }

  removeListener(event: string|symbol, listener: Function): this {
    this.service.removeListener(event, listener);
    return this;
  }

  removeAllListeners(event?: string|symbol): this {
    this.service.removeAllListeners(event);
    return this;
  }

  setMaxListeners(n: number): this {
    this.service.setMaxListeners(n);
    return this;
  }

  getMaxListeners(): number {
    return this.service.getMaxListeners();
  }

  listeners(event: string|symbol): Function[] {
    return this.service.listeners(event);
  }

  eventNames(): (string|symbol)[] {
    return this.service.eventNames();
  }

  listenerCount(type: string|symbol): number {
    return this.service.listenerCount(type);
  }
}
