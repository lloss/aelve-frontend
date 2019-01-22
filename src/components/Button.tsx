import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 0 20px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: #1c98e7; 
  color: #000000;
  transition: background-color .3s;
  outline: none;
  &:hover {
    background-color: #c792ea;
  }
`



interface IProps {
  children?: string,
  type?: string,
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void,
  disabled?: boolean,
  name?: string,
  className?: string
}

const Button:React.FC<IProps> = ({children, ...props}) => {
  return (
    <ButtonStyled {...props}>{children}</ButtonStyled>
  )
}

export default Button;