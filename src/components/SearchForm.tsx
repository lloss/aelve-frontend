import React, { Component } from 'react';
import { lazyInject } from '../config/ioc.container'
import { SERVICE_IDENTIFIER } from '../constants/identifiers'
import { ISearchFormStore } from '../interfaces'

class SearchForm extends Component {
  @lazyInject(SERVICE_IDENTIFIER.SEARCH_FORM_STORE)
  private SearchFormStore: ISearchFormStore;
  public render() {
    const {searchCode, handleSearchInput, handleSearchOptions} = this.SearchFormStore;
    return (
      <form onSubmit={searchCode}>
        <div>
          <input type="text" name="query" onChange={handleSearchInput} />
          <input type="text" name="filter" onChange={handleSearchInput} placeholder="[Filter for query]"/>
          <input type="text" name="filePath" onChange={handleSearchInput} placeholder="[Path to file regex]"/>
          <button>Go!</button>
        </div>
        <div>
          <label>
            <input type="checkbox" onChange={handleSearchOptions} name="case"/>
            Case-insensitive search
          </label>
          <label>
            <input type="checkbox" onChange={handleSearchOptions} name="space"/>
            Space-insensitive search
          </label>
          <label>
            <input type="checkbox" onChange={handleSearchOptions} name="precise"/>
            Precise match
          </label>
          <label>
            <input type="checkbox" onChange={handleSearchOptions} name="sources"/>
            Sources only
          </label>
        </div>
      </form>
    )
  }
}

export default SearchForm; 