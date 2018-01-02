import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../Reducers/postsReducer';
import Timeline from '../Components/Timeline';
import { fetchPosts } from '../Actions/postActions';

const propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  fetchPosts: PropTypes.func.isRequired,
};

class TimelineContainer extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <Timeline posts={this.props.posts} />
    );
  }
}

TimelineContainer.propTypes = propTypes;

const mapStateToProps = state => ({
  posts: getPosts(state),
});

export default connect(mapStateToProps, { fetchPosts })(TimelineContainer);
