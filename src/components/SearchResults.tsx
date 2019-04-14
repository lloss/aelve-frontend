import React, {Component} from "react";
import styled from "styled-components";

import { ISearchResults } from "../interfaces";
import FileItem from "./FileItem";

const Link = styled.a`
  color: #60bdec;
`;

class SearchResults extends Component<{searchResults: ISearchResults[], lang?: any}> {
  public render() {
    const {searchResults, lang} = this.props;
    if (searchResults.length) {
      return searchResults.map(({ id, files, ...item }) => (
        <div key={id}>
          <h2>
            <Link href={item.repoUrl}>{item.repoName}</Link>
          </h2>
          <span>{item.matches} matches</span>
          {files.map(file => (
            <FileItem {...file} lang={lang} key={file.id} />
          ))}
        </div>
      ));
    }
    return <h2>search results</h2>
  }
}

export default SearchResults;
