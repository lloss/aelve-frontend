import { injectable } from 'inversify'
import { observable } from 'mobx';

import { IPropsMetroItem, IUiStore } from '../../interfaces'

import {langs} from '../../mock-langs';

@injectable()
export class UiStore implements IUiStore{
    @observable public value: string = "Hello";
    @observable public langs: IPropsMetroItem[] = langs;
}