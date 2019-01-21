import { injectable } from 'inversify'
import { action, observable } from 'mobx';

import { IRouterStore } from '../../interfaces'

@injectable()
export class RouterStore implements IRouterStore {
  @observable public location: Window['location'];
  @observable public history: Window['history'];

  @action public setRoute(location: Window['location'], history: Window['history']) {
    this.location = location;
    this.history = history;
  }
}