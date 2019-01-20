import { injectable } from 'inversify'
import { observable } from 'mobx';

import { IMainPageDomainStore, IPropsRepositoryItem } from '../../interfaces'
import {langs} from '../../mock-langs';

@injectable()
export class MainPageMockDomainStore implements IMainPageDomainStore{
    @observable public langs: IPropsRepositoryItem[] = langs;
}