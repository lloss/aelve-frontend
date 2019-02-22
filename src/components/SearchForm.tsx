import React from 'react';

const SearchForm:React.FC<any> = props => {
  return (
    <form onSubmit={props.searchCode}>
      <div>
        <input 
          type="text" 
          name="query" 
          onChange={props.handleSearchInput}
        />
        <input 
          type="text" 
          name="filter" 
          onChange={props.handleSearchInput} 
          placeholder="[Filter for query]"
        />
        <input 
          type="text" 
          name="filePath" 
          onChange={props.handleSearchInput} 
          placeholder="[Path to file regex]"
        />
        <button>Go!</button>
      </div>
      <div>
        <label>
          <input 
            type="checkbox" 
            onChange={props.handleSearchOptions} 
            name="case"
          />
          Case-insensitive search
        </label>
        <label>
          <input 
            type="checkbox" 
            onChange={props.handleSearchOptions} 
            name="space"
          />
          Space-insensitive search
        </label>
        <label>
          <input 
            type="checkbox" 
            onChange={props.handleSearchOptions} 
            name="precise"
          />
          Precise match
        </label>
        <label>
          <input 
            type="checkbox" 
            onChange={props.handleSearchOptions} 
            name="sources"
          />
          Sources only
        </label>
      </div>
    </form>
  )
}

export default SearchForm; 