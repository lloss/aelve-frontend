import React, {Component} from 'react';
import { lazyInject } from '../config/ioc.container'
import { SERVICE_IDENTIFIER } from '../constants/identifiers'
import { ISearchFormStore } from '../interfaces'


class SearchResults extends Component {
  @lazyInject(SERVICE_IDENTIFIER.SEARCH_FORM_STORE)
  private SearchFormStore: ISearchFormStore;
  public render() {
    const {searchResults} = this.SearchFormStore
    return searchResults ? (
        searchResults.map(({id, ...item}) => <div key={id}>{item.fileName} {item.fileUrl} {item.sourceCode}</div>)
      ) : (
        <h2>search results</h2>
      )
  }
}

export default SearchResults;