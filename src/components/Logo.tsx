import { Link } from '@reach/router';
import React from 'react';
import styled from 'styled-components';
import logo from "../logo.svg";


const LogoWrap = styled(Link)`
  display: flex;
  padding: 10px;
  text-decoration: none;
`

const Text = styled.span`
  color: #b8ced9;
  font-weight: bolder;
  font-size: 1.2em;
  line-height: 24px;
`

const Logo:React.FC = () => {
  return (
    <LogoWrap to="/">
      <img src={logo} alt="aelve"/>
      <Text>
        Aelve codesearch
      </Text>
    </LogoWrap>
  )
}

export default Logo;