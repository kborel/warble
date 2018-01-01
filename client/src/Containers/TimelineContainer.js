import { connect } from 'react-redux';
import { getPosts } from '../Reducers/postsReducer';
import Timeline from '../Components/Timeline';

const mapStateToProps = state => ({
  posts: getPosts(state),
});

export default connect(mapStateToProps)(Timeline);
