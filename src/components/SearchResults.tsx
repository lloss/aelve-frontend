import React from 'react';

import { ISearchItem } from '../interfaces'
import FileItem from './FileItem';

const SearchResults:React.FC<any> = props => {
  const {searchResults} = props;
  return searchResults.length ? (
    searchResults.map(({id, ...item}:ISearchItem) => {
      return (
        <div key={id}>
          <h2><a href={item.repoUrl}>{item.repoName} </a></h2>
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