import {observer} from 'mobx-react'
import React, { Component } from 'react';

import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import { lazyInject } from '../config/ioc.container'
import { SERVICE_IDENTIFIER } from '../constants/identifiers'
import { AppWrap, Container, Main } from '../globalStyles';
import { ISearchFormStore } from '../interfaces'

@observer
class MainPage extends Component<{ path: string, repoLabel?: string }> {
  @lazyInject(SERVICE_IDENTIFIER.SEARCH_FORM_STORE)
  private SearchFormStore: ISearchFormStore;
  public render() {
    const { repoLabel } = this.props
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
            <SearchResults
              searchResults={this.SearchFormStore.searchResults}
              lang={repoLabel}
            />
          </Container>
        </Main>
      </AppWrap>
    )
  }
}

export default MainPage;