import {observer} from 'mobx-react'
import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Snippet from '../components/Snippet';
import { Container } from '../globalStyles';


const AppWrap = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1 0 auto;
`

@observer
class SnippetPage extends Component<{ path: string, repoLabel?: string}> {
  public render() {
    const {repoLabel} = this.props
    return (
      <AppWrap>
        <Header/>
        <Main>
          <Container>
            <Snippet lang={repoLabel} />
          </Container>
        </Main>
      </AppWrap>
    )
  }
}

export default SnippetPage;