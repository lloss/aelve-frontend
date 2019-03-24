import React from 'react';
import styled from 'styled-components'

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


const SearchForm:React.FC<ISearchFormStore> = props => {
  return (
    <form onSubmit={props.searchCode}>
      <FormHeader>
        <Input type="text" name="query" onChange={props.handleSearchInput} />
        <Input type="text" name="filter" onChange={props.handleSearchInput} placeholder="[Filter for query]"/>
        <Input type="text" name="filePath" onChange={props.handleSearchInput} placeholder="[Path to file regex]"/>
        <Button>Go!</Button>
      </FormHeader>
      <FormFooter>
        <Checkbox onChange={props.handleSearchOptions} name="case">
          Case-insensitive search
        </Checkbox>
        <Checkbox onChange={props.handleSearchOptions} name="space">
          Space-insensitive search
        </Checkbox>
        <Checkbox onChange={props.handleSearchOptions} name="precise">
          Precise match
        </Checkbox>
        <Checkbox onChange={props.handleSearchOptions} name="sources">
          Sources only
        </Checkbox>
      </FormFooter>
    </form>
  )
}

export default SearchForm; 