import React from 'react';
import Photo from './Project';

const ProjectGrid = React.createClass({
  render() {
    return (
      <div className="project-grid">
        {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
      </div>
    )
  }
});

export default ProjectGrid;
