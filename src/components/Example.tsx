import React, { Component } from 'react'
import { lazyInject } from '../config/ioc.container'
import { SERVICE_IDENTIFIER } from '../constants/identifiers'
import {IHaskellRepoSearchFormStore, IUiStore} from '../interfaces'

export class Example extends Component<{}, {}>{
    @lazyInject(SERVICE_IDENTIFIER.UI_STORE)
    public UiStore: IUiStore;
    @lazyInject(SERVICE_IDENTIFIER.HASKELL_FORM_STORE)
    public HaskellRepoSearchFormStateStore: IHaskellRepoSearchFormStore;

    public render () {
        return (<div>{this.UiStore.value} {this.HaskellRepoSearchFormStateStore.haskell}</div>)
    }
}