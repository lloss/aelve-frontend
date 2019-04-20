import {observer} from 'mobx-react'
import React, { Component } from 'react';

import Header from '../components/Header';
import RepositoresGrid from '../components/RepositoresGrid';
import { AppWrap, Container, Main } from '../globalStyles';

@observer
class MainPage extends Component<{ path: string }> {
  public render() {
    return (
      <AppWrap>
        <Header />
        <Main>
          <Container>
            <RepositoresGrid />
          </Container>
        </Main>
      </AppWrap>
    )
  }
}

export default MainPage;