import React from 'react';
import {Link} from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {/* NOTE: this is being used in place of this.props.children because we want to pass down parameters! */} 
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});
export default Main;
