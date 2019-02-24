import React from 'react';
import styled from "styled-components";

const Link = styled.a`
  color: #60BDEC;
`

const FileItem:React.FC<any> = ({
  fileLink, 
  fileName, 
  sourceCode
}) => {
  return (
    <article>
      <Link target="_blank" href={fileLink}>{fileName}</Link>
      <pre>
        <code className="lang-haskell">
          {sourceCode}
        </code>
      </pre>
    </article>
  )
}

export default FileItem;