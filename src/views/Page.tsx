import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import NotFound from '../components/NotFound';
import { Container } from '../globalStyles';

const Main = styled.main`
  flex: 1 0 auto;
`

interface IPage {
  form?: React.ComponentClass,
  content?: any,
  path?: string,
  default?: boolean
}

const Page = ({form: Form, content: Content, ...props}: IPage) => {
  return (
    <>
      <Header>
        { Form ? <Form /> : null }
      </Header>
      <Main>
        <Container>
          { props.default ? <NotFound /> : <Content /> }
        </Container>
      </Main>
    </>
  )
}

export default Page;
