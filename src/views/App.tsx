import { createHistory, Router } from '@reach/router';
import {observer} from 'mobx-react'
import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import RepositoresGrid from '../components/RepositoresGrid';
import { Container } from '../globalStyles';


const AppWrap = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1 0 auto;
`

const source = window as any;
const history = createHistory(source)

@observer
class App extends Component {
  public render() {
    return (
        <AppWrap>
          <Header />
          <Main>
            <Container>
              <Router>
                <RepositoresGrid path="/" history={history} />
              </Router>
            </Container>
          </Main>
        </AppWrap>
    )
  }
}

export default App;
