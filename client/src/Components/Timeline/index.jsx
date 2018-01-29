import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

const Timeline = ({ posts }) => (
  <div>
    {
      posts.length !== 0 ? posts.map(post =>
        <div key={post.id} >id: {post.id} text: {post.text}</div>)
      : 'no posts yet'
    }
  </div>
);

Timeline.propTypes = propTypes;

export default Timeline;
