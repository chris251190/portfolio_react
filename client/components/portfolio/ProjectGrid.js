import React from 'react';
import Project from './Project';

const ProjectGrid = React.createClass({
  render() {
    return (
      <div className="project-grid">
        {this.props.posts.map((post, i) => <Project {...this.props} key={i} i={i} post={post} />)}
      </div>
    )
  }
});

export default ProjectGrid;
