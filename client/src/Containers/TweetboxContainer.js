import { connect } from 'react-redux';
import Tweetbox from '../Components/Tweetbox';
import { submitPost } from '../Actions/postActions';

export default connect(null, { submitPost })(Tweetbox);

