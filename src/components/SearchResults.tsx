import React from 'react';
import { ISearchItem } from '../interfaces'

const SearchResults:React.FC<any> = props => {
  const {searchResults} = props;
  return searchResults.length ? (
    searchResults.map(({id, ...item}:ISearchItem) => {
      return (
        <>
          <div key={id}>{item.repoName} {item.matches} {item.repoUrl}
              {
                item.files.map((file, index) => <div key={index}><a target="_blank" href={file.fileLink}>{file.fileName}</a></div>)
              }
          </div>
        </>
      )
    })
  ) : (
    <h2>search results</h2>
  )
}

export default SearchResults;