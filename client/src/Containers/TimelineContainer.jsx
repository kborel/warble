import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../Reducers/postsReducer';
import Timeline from '../Components/Timeline';
import { fetchPosts } from '../Actions/postActions';

const withFetchPosts = (WrappedComponent) => {
  const propTypes = {
    fetchPosts: PropTypes.func.isRequired,
  };

  class WithFetchPosts extends Component {
    componentDidMount() {
      this.props.fetchPosts();
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  WithFetchPosts.propTypes = propTypes;

  return WithFetchPosts;
};

const mapStateToProps = state => ({
  posts: getPosts(state),
});

export default connect(mapStateToProps, { fetchPosts })(withFetchPosts(Timeline));
