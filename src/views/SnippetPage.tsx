import {observer} from 'mobx-react'
import React, { Component } from 'react';

import Header from '../components/Header';
import Snippet from '../components/Snippet';
import { lazyInject } from '../config/ioc.container'
import { SERVICE_IDENTIFIER } from '../constants/identifiers'
import { AppWrap, Container, Main } from '../globalStyles';
import { ISnippetPageStore } from '../interfaces'

@observer
class SnippetPage extends Component<{ path: string, repoLabel?: string}> {
  @lazyInject(SERVICE_IDENTIFIER.SNIPPET_PAGE_STORE)
  private SnippetPageStore: ISnippetPageStore;
  public componentDidMount() {
    this.SnippetPageStore.getSnippet(this.props['*'])
  }
  public render() {
    const { repoLabel } = this.props
    const { snippet } = this.SnippetPageStore
    return (
      <AppWrap>
        <Header/>
        <Main>
          <Container>
            { Object.keys(snippet).length ? <Snippet lang={repoLabel} {...snippet} /> : <span>Loading...</span> }
          </Container>
        </Main>
      </AppWrap>
    )
  }
}

export default SnippetPage;