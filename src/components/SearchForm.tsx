import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';

const theme = {
  width: "47%"
}

const Search = styled.div`
  display: flex;
  border: 1px solid #14191c;
  margin: 20px 0 10px 0;
`

class SearchForm extends Component<{}, {}> {
  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Search>
          <Input type="text" name="test" theme={theme} placeholder="text"/>
          <Input type="text" name="test" theme={theme} placeholder="text"/>
          <Button type="submit">go!</Button>
        </Search>
      </form>
    )
  }
  private handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }
}

export default SearchForm;