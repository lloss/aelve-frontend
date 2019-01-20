import React from 'react';
import styled from 'styled-components';

const MenuWrap = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`

const MenuItem = styled.li`
  list-style: none;
`

const MenuLink = styled.a`
  display: block;
  padding: 10px;
  color: #60bdec;
  font-size: 0.90em;
  text-decoration: none;
  &:hover {
    color: #c792ea;
    text-decoration: none;
  }
`

const Menu:React.FC = () => {
  return (
    <MenuWrap>
      <MenuItem>
        <MenuLink href="https://swtch.com/~rsc/regexp/regexp4.html">How it works</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="https://aelve.com/">Author</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="https://github.com/aelve/codesearch">Source</MenuLink>
      </MenuItem>
    </MenuWrap>
  )
}

export default Menu;