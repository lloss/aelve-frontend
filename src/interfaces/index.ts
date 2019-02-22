import {History, Location, NavigateFn} from '@reach/router';
import {ChangeEvent, FormEvent} from 'react';
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


export interface ISearchItem {
    id?: string,
    repoName: string,
    repoUrl: string,
    matches: number,
    files: any[]
}


export interface ISearchFormStore {
    searchResults: ISearchItem[],
    searchCode: (event: FormEvent<HTMLFormElement>) => void,
    searchFormFields: ISearchFormFields,
    searchFormOptions: string[],
    handleSearchInput: (event: ChangeEvent<HTMLInputElement>) => void,
    handleSearchOptions: (event: ChangeEvent<HTMLInputElement>) => string[],
}

export interface ISearchFormFields {
    query?: string,
    filter?: string,
    filePath?: string
}