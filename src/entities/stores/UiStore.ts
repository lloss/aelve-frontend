import { injectable } from 'inversify'
import { observable } from 'mobx';

@injectable()
export class UiStore {
    @observable public value: string = "Hello";
}