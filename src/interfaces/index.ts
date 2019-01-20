export interface IHaskellRepoSearchFormStore {
    haskell: string
}
export interface IUiStore {
    value: string;
}


export interface IPropsMetroItem {
    id?: any,
    lang?: string,
    repo?: string,
    totalPackages?: number,
    updatedAgo?: string,
    logoSrc?: string
}