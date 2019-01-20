import { injectable } from 'inversify'
import { observable } from 'mobx';

import { IMainPageDomainStore, IPropsRepositoryItem } from '../../interfaces'

@injectable()
export class MainPageDomainStore implements IMainPageDomainStore{
    @observable public langs: IPropsRepositoryItem[] = [];
}