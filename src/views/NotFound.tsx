import {Link} from '@reach/router';
import React, { Component } from 'react';


class NotFound extends Component<{ default: boolean }, { }> {
  public render() {
    return (
      <>
        not found <Link to="/">home</Link>
      </>
    )
  }
}

export default NotFound;
