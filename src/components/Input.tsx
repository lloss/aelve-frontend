import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  background-color: #242e33;
  border: none;
  outline: none;
  padding: 0 13px;
  height: 38px;
  font-size: 1em;
  width: 40%;
  box-sizing: border-box;
  color: #588696;
  border-right: 1px solid #14191c;
  &::placeholder {
    color: #588696;
  }
`

type Props = {
  placeholder?: string,
  type: string,
  name: string,
  disabled?: boolean,
  onChange?: (e: React.FormEvent) => void;
  required?: boolean
}

const Input:React.FC<Props> = props => {
  return (
    <InputStyled {...props} />
  )
}

export default Input;