import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import tomorrow from 'react-syntax-highlighter/dist/styles/hljs/atom-one-dark'; 
import styled from "styled-components";

import { ISnippet } from "../interfaces"

const Code = styled(SyntaxHighlighter)`
  border: 1px solid #3c3c3c;
  padding: 20px!important;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: #39464d!important;
  margin-top: 0;
  & code {
    font-family: 'Fira Code', monospace;
  }
`

const SnippetStyled = styled.article`
  margin: 20px 0;
`

const Snippet:React.FC<ISnippet> = ({lang, sourceCode}) => {
  return (
    <SnippetStyled>
      <Code 
        language={lang} 
        showLineNumbers={true} 
        style={tomorrow}
      >
        {sourceCode}
      </Code>
    </SnippetStyled>
  )
}

export default Snippet;