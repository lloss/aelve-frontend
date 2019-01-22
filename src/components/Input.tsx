import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
  background-color: #242e33;
  border: none;
  outline: none;
  padding: 0 13px;
  height: 38px;
  font-size: 1em;
  box-sizing: border-box;
  color: #588696;
  border-right: 1px solid #14191c;
  width: ${({theme}) => theme.width};
  &::placeholder {
    color: #588696;
  }
`

interface ITheme {
  width: string
}

interface IProps {
  placeholder?: string,
  type: string,
  name: string,
  disabled?: boolean,
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  required?: boolean,
  theme?: ITheme
}

const Input: React.FC<IProps> = props => <InputStyle {...props} />;

export default Input;