import React from 'react';
import Image from './Image';

const About = React.createClass({
  render() {
    return (
      <div className="project-grid">
          <Image url="https://thumb9.shutterstock.com/display_pic_with_logo/1998197/262734242/stock-photo-happy-young-man-portrait-of-handsome-young-man-in-casual-shirt-keeping-arms-crossed-and-smiling-262734242.jpg"/>
            <p>Hey there! This is me, Christian. I'm 26 years old and a Fullstack Developer who is interested in Java(Spring), Ruby
                on Rails and Javascript especially in React.
            </p>
      </div>
    )
  }
});

export default About;
