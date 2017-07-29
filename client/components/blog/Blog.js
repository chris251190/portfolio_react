import React from 'react';
import BlogEntry from './BlogEntry';

const Blog = React.createClass({
  render() {
    return (
      <div className="project-grid">
        This is a blog component
      <BlogEntry />
      </div>
    )
  }
});

export default Blog;
