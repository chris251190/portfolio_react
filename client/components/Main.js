import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Portfolio</Link>
        </h1>
        {React.cloneElement({...this.props}.children, {...this.props})}
          <a className="center" href="https://de.icons8.com">Icon pack by Icons8</a>
      </div>
    )
  }
});

export default Main;
