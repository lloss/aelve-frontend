import {observer} from 'mobx-react'
import React, { Component } from 'react';

import Header from '../components/Header';
import Snippet from '../components/Snippet';
import { AppWrap, Container, Main } from '../globalStyles';

@observer
class SnippetPage extends Component<{ path: string, repoLabel?: string | undefined}> {
  public componentDidMount() {
    console.log(this.props['*'])
  }
  public render() {
    const {repoLabel} = this.props
    return (
      <AppWrap>
        <Header/>
        <Main>
          <Container>
            <Snippet lang={repoLabel} sourceCode={'test'} />
          </Container>
        </Main>
      </AppWrap>
    )
  }
}

export default SnippetPage;