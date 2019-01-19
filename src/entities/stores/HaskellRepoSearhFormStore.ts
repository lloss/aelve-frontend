import { injectable } from 'inversify'
import { observable } from 'mobx';

@injectable()
export class HaskellRepoSearhFormStore {
    @observable public haskell: string = "Haskell";
}