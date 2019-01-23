import { History, Location, NavigateFn } from '@reach/router';
import { injectable } from 'inversify'
import { action, observable } from 'mobx';

import { IRouterStore } from '../../interfaces'

@injectable()
export class RouterStore implements IRouterStore {
    @observable public navigate: NavigateFn;
    @observable public location: Location;
    @observable public history: History;

    @action public setRouter(navigate: NavigateFn, location: Location, history: History) {
        this.navigate = navigate;
        this.location = location;
        this.history = history;
    }
}