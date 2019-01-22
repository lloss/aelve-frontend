import { createHistory, createMemorySource, LocationProvider, Router } from "@reach/router";
import {observer} from 'mobx-react'
import React, { Component } from 'react';
import styled from 'styled-components';

import RepositoresGrid from '../components/RepositoresGrid';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import Page from './Page';


const AppWrap = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const source = createMemorySource('/')
const history = createHistory(source);

@observer
class App extends Component<{ }, { }> {
  public render() {
    return (
      <LocationProvider history={history}>
        <AppWrap>
          <Router>
            <Page path="/" content={ RepositoresGrid }/>
            <Page path="/Haskell" form={ SearchForm } content={ SearchResults }/>
            <Page default={true} />
          </Router>
        </AppWrap>
      </LocationProvider>
    )
  }
}

export default App;
