import {Link as RouterLink} from '@reach/router';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import tomorrow from 'react-syntax-highlighter/dist/styles/hljs/atom-one-dark'; 
import styled from "styled-components";


const FileName = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  background-color: #1c98e7;
  padding: 8px;
  display: block;
  border-top-right-radius: 3px;
  font-size: 14px;
`

const Link = styled(RouterLink)`
  color: #FFFFFF;
  display: block;
  right: 0;
  top: 10px;
  text-decoration: none;
`

const Code = styled(SyntaxHighlighter)`
  border: 1px solid #1c98e7;
  padding: 20px!important;
  border-radius: 3px;
  background-color: #39464d!important;
`

const FileWrapper = styled.article`
  position: relative;
`


const FileItem:React.FC<any> = ({
  fileLink, 
  fileName, 
  sourceCode
}) => {
  return (
    <FileWrapper>
      <Link to={`/${fileLink}`}>
        <Code 
          language='haskell' 
          showLineNumbers={true} 
          style={tomorrow}
        >
          {sourceCode}
        </Code>
        <FileName>
          {fileName}
        </FileName>
      </Link>
    </FileWrapper>
  )
}

export default FileItem;