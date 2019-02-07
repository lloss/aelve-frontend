import React, { Component } from 'react';

class SearchForm extends Component {

  public render() {
    return (
      <form>
        <div>
          <input type="text" />
          <input type="text" placeholder="[Filter for query]"/>
          <input type="text" placeholder="[Path to file regex]"/>
          <button>Go!</button>
        </div>
        <div>
          <label>
            <input type="checkbox" name="case-intensitive"/>
            Case-insensitive search
          </label>
          <label>
            <input type="checkbox" name="space-insensitive"/>
            Space-insensitive search
          </label>
          <label>
            <input type="checkbox" name="precise"/>
            Precise match
          </label>
          <label>
            <input type="checkbox" name="sources"/>
            Sources only
          </label>
        </div>
      </form>
    )
  }
}

export default SearchForm; 