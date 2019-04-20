import {Link as RouterLink} from '@reach/router';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import tomorrow from 'react-syntax-highlighter/dist/styles/hljs/atom-one-dark'; 
import styled from "styled-components";

import {IFileItem} from "../interfaces/"


const FileName = styled.span`
  background-color: #3c3c3c;
  padding: 8px;
  display: block;
  font-size: 14px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`

const Link = styled(RouterLink)`
  color: #FFFFFF;
  display: block;
  right: 0;
  top: 10px;
  text-decoration: none;
`

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

const FileWrapper = styled.article`
  position: relative;
  margin-top: 10px;
`


const FileItem:React.FC<IFileItem> = ({
  fileName, 
  sourceCode,
  lang,
  id
}) => {
  return (
    <FileWrapper>
      <Link to={`/${lang}/${fileName}`}>
        <FileName>
          {fileName}
        </FileName>
        <Code 
          language={lang} 
          showLineNumbers={true} 
          style={tomorrow}
        >
          {sourceCode}
        </Code>
      </Link>
    </FileWrapper>
  )
}

export default FileItem;