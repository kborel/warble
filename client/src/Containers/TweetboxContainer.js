import { connect } from 'react-redux';
import Tweetbox from '../Home/Timeline/Tweetbox';
import { submitPost } from '../Actions/postActions';

export default connect(null, { submitPost })(Tweetbox);

