import { injectable } from 'inversify'
import { observable } from 'mobx';

import { IHaskellRepoSearchFormStore } from '../../interfaces'

@injectable()
export class HaskellRepoSearhFormStore implements IHaskellRepoSearchFormStore{
    @observable public haskell: string = "Haskell";
}