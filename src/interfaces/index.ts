export interface IHaskellRepoSearchFormStore {
    haskell: string
}
export interface IUiStore {
    value: string;
    langs: IPropsMetroItem[]
}


export interface IPropsMetroItem {
    id?: any,
    repoLabel?: string,
    repoUrl?: string,
    totalPackages?: number,
    updatedAgo?: string,
    logoSrc?: string
}