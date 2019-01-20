import { injectable } from 'inversify'
import { observable } from 'mobx';

import { IUiStore } from '../../interfaces'

@injectable()
export class UiStore implements IUiStore{
    @observable public value: string = "Hello";
}