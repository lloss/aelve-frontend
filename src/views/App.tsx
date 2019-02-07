import { Router } from '@reach/router';
import {observer} from 'mobx-react'
import React, { Component } from 'react';

import MainPage from './MainPage';
import SearchPage from './SearchPage';

@observer
class App extends Component {
  public render() {
    return (
      <Router>
        <MainPage path="/" />
        <SearchPage path=":repoLabel" />
      </Router>
    )
  }
}

export default App;
