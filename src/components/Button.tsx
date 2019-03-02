import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: #1c98e7;
  color: #000000;
  transition: background-color .3s;
  outline: none;
  border: 0;
  height: 38px;
  width: 64px;
  &:hover {
    background-color: #c792ea;
  }
`

type Props = {
  children?: string,
  type?: string,
  onClick?: (e: React.FormEvent) => void,
  disabled?: boolean,
  name?: string,
  className?: string
}

const Button:React.FC<Props> = ({children, ...props}) => {
  return (
    <ButtonStyled {...props}>{children}</ButtonStyled>
  )
}

export default Button;