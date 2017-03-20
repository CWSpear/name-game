import { sortedIndexBy, findIndex, assign, remove } from 'lodash';
import { NgZone } from '@angular/core';
import { Service } from 'feathers';

import { OneEvents } from '../../enums/one-event.enum';
import { ListEvents } from '../../enums/list-events.enum';

export abstract class BaseModelService<T> {
  public service: Service<T>;

  constructor(protected zone: NgZone) {}

  // wrap `on` to use zones
  on(event: string | symbol, listener: Function): this {
    this.service.on(event, (...result) => {
      this.zone.run(() => listener(...result));
    });

    return this;
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
              const index = sortedIndexBy(list, data, 'id');
              list.splice(index, 0, data);
            }
          });
          break;

        case ListEvents.updated:
        case ListEvents.patched:
          this.on(eventType, (data: T) => {
            if (!matcher || matcher(data)) {
              const index = findIndex(list, (i) => i['id'] === data['id']);
              assign(list[index], data);
            }
          });
          break;

        case ListEvents.removed:
          this.on(eventType, (data: T) => {
            if (!matcher || matcher(data)) {
              // remove mutates
              remove(list, (i) => i['id'] === data['id']);
            }
          });
          break;
      }
    });

    return this;
  }
}
