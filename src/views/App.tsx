import { Router } from '@reach/router';
import {observer} from 'mobx-react'
import React, { Component } from 'react';

import MainPage from './MainPage';

@observer
class App extends Component {
  public render() {
    return (
      <Router>
        <MainPage path="/" />
      </Router>
    )
  }
}

export default App;
