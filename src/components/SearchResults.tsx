import React from 'react';
import styled from "styled-components";

import { ISearchResults } from '../interfaces'
import FileItem from './FileItem';

const Link = styled.a`
  color: #60BDEC;
`

type Props = {
  searchResults: ISearchResults[]
}

const SearchResults:React.FC<Props> = ({searchResults}) => {
  return searchResults.length ? (
    searchResults.map(({id, ...item}) => {
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