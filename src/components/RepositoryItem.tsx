import React from 'react';
import styled from 'styled-components';

import {IPropsRepositoryItem} from '../interfaces/index';

const RepositoryItemWrap = styled.div`
  width: 100%;
  min-height: 250px;
  color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  background-color: #39464d;
  &:nth-child(4n-6) {
    grid-column: span 2;
  }
  &:nth-child(5) {
    grid-row: 2 / 4;
  }
`

const Img = styled.img`
  max-width: 84px;
  max-height: 84px;
  margin: auto;
  position: absolute;
  right: 30px;
  top: 30px;
`

const Title = styled.h4`
  font-weight: normal;
  font-size: 1.5em;
  margin: 0;
`

const WrappedLink = styled.a`
  color: #fff;
  text-decoration: none;
`

const RepoLink = styled.a`
  color: rgba(255, 255, 255, 0.60);
  text-decoration: none;
  margin: 7px 0;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`

const Span = styled.span`
  display: block;
`

const Updated = styled(Span)`
  font-size: 0.80em;
  text-align: right;
  margin-top: auto;
`

const Value = styled(Span)`
  color: rgba(255, 255, 255, 0.60);
`


const RepositoryItem:React.FC<IPropsRepositoryItem> = ({repoLabel, repoUrl, totalPackages, updatedAgo, logoSrc}) => {
  return (
    <RepositoryItemWrap>
      <Title><WrappedLink href="/">{repoLabel}</WrappedLink></Title>
      <RepoLink href={`http://${repoUrl}`}>
        {repoUrl}
      </RepoLink>
      <Value>{totalPackages} packages</Value>
      <Img
        src={logoSrc}
        alt={repoLabel}
      />
      <Updated>Last updated: {updatedAgo}</Updated>
    </RepositoryItemWrap>
  )
}

export default RepositoryItem;