import {observer} from 'mobx-react'
import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
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
class MainPage extends Component<{ path: string }> {
  public render() {
    return (
      <AppWrap>
        <Header>
          <SearchForm />
        </Header>
        <Main>
          <Container>
            <SearchResults />
          </Container>
        </Main>
      </AppWrap>
    )
  }
}

export default MainPage;