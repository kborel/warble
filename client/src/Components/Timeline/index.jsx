import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';

const propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

const Timeline = ({ posts }) => (
  <Section area="timeline">
    {
      posts.length !== 0 ? posts.map(post =>
        <div key={post.id} >id: {post.id} text: {post.text}</div>)
      : 'no posts yet'
    }
  </Section>
);

Timeline.propTypes = propTypes;

export default Timeline;
