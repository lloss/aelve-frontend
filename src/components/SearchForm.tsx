import React, { Component } from 'react';

class SearchForm extends Component<{}, {}> {

  public render() {
    return (
      <form>
        <div>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
        </div>
      </form>
    )
  }
}

export default SearchForm;