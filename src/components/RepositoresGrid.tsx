import React, { Component } from 'react';
import styled from 'styled-components';
import { lazyInject } from '../config/ioc.container'
import { SERVICE_IDENTIFIER } from '../constants/identifiers'
import { IMainPageDomainStore, IPropsRepositoryItem } from '../interfaces'


import RepositoryItem from './RepositoryItem';

const RepositoresGridWrap = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

class RepositoresGrid extends Component {
  @lazyInject(SERVICE_IDENTIFIER.MAIN_PAGE_DOMAIN_STORE)
  private MainPageDomainStore: IMainPageDomainStore;

  public render() {
    return (
      <RepositoresGridWrap>
        { this.MainPageDomainStore.langs.map(({ id, ...item }: IPropsRepositoryItem) => <RepositoryItem {...item} key={id}/>) }
      </RepositoresGridWrap>
    )
  }
}

export default RepositoresGrid;