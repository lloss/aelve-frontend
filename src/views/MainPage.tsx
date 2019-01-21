import {observer} from 'mobx-react'
import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import RepositoresGrid from '../components/RepositoresGrid';
import { Container } from '../globalStyles';

const Main = styled.main`
  flex: 1 0 auto;
`


@observer
class MainPage extends Component<{ path: string }, { }> {
  public render() {
    return (
      <>
        <Header />
        <Main>
          <Container>
            <RepositoresGrid />
          </Container>
        </Main>
      </>
    )
  }
}

export default MainPage;
