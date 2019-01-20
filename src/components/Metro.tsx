import React from 'react';
import styled from 'styled-components';

import { IPropsMetroItem } from '../interfaces/index';
import MetroItem from './MetroItem';

const MetroWrap = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

interface ILangs {
  langs: IPropsMetroItem[]
}

const Metro:React.FC<ILangs> = ({ langs }) => {
  return (
    <MetroWrap>
      { langs.map(({ id, ...item }) => <MetroItem {...item} key={id}/>) }
    </MetroWrap>
  )
}

export default Metro;