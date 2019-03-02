import React, { Component } from 'react';
import styled from 'styled-components'

import { lazyInject } from '../config/ioc.container'
import { SERVICE_IDENTIFIER } from '../constants/identifiers'
import { ISearchFormStore } from '../interfaces'
import Button from './Button'
import Checkbox from './Checkbox';
import Input from './Input'

const FormHeader = styled.div`
  border: 1px solid #000;
  display: flex;
`

const FormFooter = styled.div`
  margin-top: 20px;
`

class SearchForm extends Component {
  @lazyInject(SERVICE_IDENTIFIER.SEARCH_FORM_STORE)
  private SearchFormStore: ISearchFormStore;
  public render() {
    const {searchCode, handleSearchInput, handleSearchOptions} = this.SearchFormStore;
    return (
      <form onSubmit={searchCode}>
        <FormHeader>
          <Input type="text" name="query" onChange={handleSearchInput} />
          <Input type="text" name="filter" onChange={handleSearchInput} placeholder="[Filter for query]"/>
          <Input type="text" name="filePath" onChange={handleSearchInput} placeholder="[Path to file regex]"/>
          <Button>Go!</Button>
        </FormHeader>
        <FormFooter>
          <Checkbox onChange={handleSearchOptions} name="case">
            Case-insensitive search
          </Checkbox>
          <Checkbox onChange={handleSearchOptions} name="space">
            Space-insensitive search
          </Checkbox>
          <Checkbox onChange={handleSearchOptions} name="precise">
            Precise match
          </Checkbox>
          <Checkbox onChange={handleSearchOptions} name="sources">
            Sources only
          </Checkbox>
        </FormFooter>
      </form>
    )
  }
}

export default SearchForm; 