import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  padding-left: 23px;
  position: relative;
  display: inline-block;
  user-select: none;
  color: #E0EAEF;
  font-size: 0.90em;
  margin-right: 30px;
`

const Span = styled.span`
  display: flex;
  height: 16px;
  width: 16px;
  background: #242E33;
  border: 1px solid #191C1E;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  &::before {
    content: '';
    display: none;
    width: 8px;
    height: 8px;
    background-color: #60BDEC;
    margin: auto;
  }
`

const Input = styled.input`
  position: absolute;
  z-index: 2;
  left: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 16px;
  width: 16px;
  outline: 0;
  &:checked + ${Span} {
    &::before {
      display: block;
    }
  }
`

const Text = styled.span`
  position: relative;
  top: -2px;
`

type Props = {
  children: any,
  checked?: boolean,
  name?: string,
  onChange?: (e: React.FormEvent) => void,
  disabled?: boolean
}

const Checkbox:React.FC<Props> = ({children, ...props}) => {
  return (
    <Label>
      <Input type="checkbox" {...props}/>
      <Span />
      <Text>{children}</Text>
    </Label>
  )
}

export default Checkbox;