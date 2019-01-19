
import {observer} from 'mobx-react'
import * as React from 'react';

import './App.css';
import { Example } from './components/Example'


@observer
class App extends React.Component {
  public render() {
    return <div>
       <Example />
    </div>
  }
}

export default App;
