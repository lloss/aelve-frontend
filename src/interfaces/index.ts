import {History, Location, NavigateFn} from '@reach/router';
export interface IHaskellRepoSearchFormStore {
    haskell: string
}
export interface IUiStore {
    value: string;
}

export interface IMainPageDomainStore {
    langs: IPropsRepositoryItem[]
}
export interface IPropsRepositoryItem {
    id?: string,
    repoLabel: string,
    repoUrl: string,
    totalPackages: number,
    updatedAgo: string,
    logoSrc: string
}

export interface IRouterStore {
    navigate: NavigateFn,
    location: Location,
    history: History,
    setRouter(navigate: NavigateFn, location: Location, history: History): void
}