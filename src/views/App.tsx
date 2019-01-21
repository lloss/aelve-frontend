import { createHistory, createMemorySource, LocationProvider, Router } from "@reach/router";
import {observer} from 'mobx-react'
import React, { Component } from 'react';
import styled from 'styled-components';

import MainPage from './MainPage';
import NotFound from './NotFound';


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
            <MainPage path="/" />
            <NotFound default={true} />
          </Router>
        </AppWrap>
      </LocationProvider>
    )
  }
}

export default App;
