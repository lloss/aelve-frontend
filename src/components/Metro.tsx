import React, { Component } from 'react';
import styled from 'styled-components';
import { lazyInject } from '../config/ioc.container'
import { SERVICE_IDENTIFIER } from '../constants/identifiers'
import { IUiStore } from '../interfaces'


import MetroItem from './MetroItem';

const MetroWrap = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

class Metro extends Component {
  @lazyInject(SERVICE_IDENTIFIER.UI_STORE)
  public UiStore: IUiStore;
  public render() {
    return (
      <MetroWrap>
        { this.UiStore.langs.map(({ id, ...item }) => <MetroItem {...item} key={id}/>) }
      </MetroWrap>
    )
  }
}

export default Metro;