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
    location: Window['location'],
    history: Window['history']
}