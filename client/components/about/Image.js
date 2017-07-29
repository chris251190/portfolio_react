import React from 'react';

const Image = React.createClass({
  render() {
    return (
      <div>
        <img src={this.props.url} alt="me"/>
      </div>
    )
  }
});

export default Image;
