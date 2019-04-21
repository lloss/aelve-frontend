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

export interface ISearchResults {
    id?: string,
    repoName: string,
    repoUrl: string,
    matches: number,
    files: IFileItem[]
}

export interface IFileItem {
    id?: string,
    fileName: string,
    sourceCode: string,
    fileLink: string,
    lang: string
}

export interface ISearchForm {
    searchCode: (event: FormEvent<HTMLFormElement>) => void,
    handleSearchInput: (event: ChangeEvent<HTMLInputElement>) => void,
    handleSearchOptions: (event: ChangeEvent<HTMLInputElement>) => string[]
}

export interface ISearchFormStore extends ISearchForm {
    searchResults: ISearchResults[],
    searchFormFields?: ISearchFormFields,
    searchFormOptions?: string[]
}

export interface ISearchFormFields {
    query?: string,
    filter?: string,
    filePath?: string
}

export interface ISnippet {
    packageName: string,
    fileName: string,
    sourceCode: string,
    lang: string | undefined
}

export interface ISnippetPageStore {
    snippet: ISnippet,
    getSnippet: (path: string | undefined) => void
}