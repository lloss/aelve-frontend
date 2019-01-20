import React from 'react'
import styled from "styled-components";

import { Container } from '../globalStyles';
import Logo from './Logo';
import Menu from './Menu';

const HeaderWrap = styled.header`
  background-color: #39464d;
`

const HeaderTop = styled.div` 
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

const HeaderBottom = styled.div`
  padding-bottom: 25px;
`

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  font-weight: normal;
  text-transform: uppercase;
  color: #fff;
  margin: 10px 0 45px 0;
`


const Header:React.FC = () => {
  return (
    <HeaderWrap>
      <HeaderTop>
        <Logo />
        <Menu />
      </HeaderTop>
      <HeaderBottom>
				<Container>
					<Title>grep over package repositories</Title>
				</Container>
			</HeaderBottom>
		</HeaderWrap>
  )
}

export default Header;