import React from 'react';
import styled from "styled-components";

import { ISearchItem } from '../interfaces'
import FileItem from './FileItem';

const Link = styled.a`
  color: #60BDEC;
`

const SearchResults:React.FC<any> = props => {
  const {searchResults} = props;
  return searchResults.length ? (
    searchResults.map(({id, ...item}:ISearchItem) => {
      return (
        <div key={id}>
          <h2><Link href={item.repoUrl}>{item.repoName}</Link></h2>
          <span>{item.matches} matches</span>
            {
              item.files.map(({id:fileId, ...file}) => <FileItem {...file} key={fileId} />)
            }
        </div>
      )
    })
  ) : (
    <h2>search results</h2>
  )
}

export default SearchResults;