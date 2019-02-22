import {observer} from 'mobx-react'
import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import { lazyInject } from '../config/ioc.container'
import { SERVICE_IDENTIFIER } from '../constants/identifiers'
import { Container } from '../globalStyles';
import { ISearchFormStore } from '../interfaces'


const AppWrap = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1 0 auto;
`

@observer
class MainPage extends Component<{ path: string }> {
  @lazyInject(SERVICE_IDENTIFIER.SEARCH_FORM_STORE)
  private SearchFormStore: ISearchFormStore;
  public render() {
    return (
      <AppWrap>
        <Header>
          <SearchForm 
            searchCode={this.SearchFormStore.searchCode} 
            handleSearchInput={this.SearchFormStore.handleSearchInput}
            handleSearchOptions={this.SearchFormStore.handleSearchOptions}
          />
        </Header>
        <Main>
          <Container>
            <SearchResults searchResults={this.SearchFormStore.searchResults} />
          </Container>
        </Main>
      </AppWrap>
    )
  }
}

export default MainPage;