import { connect } from 'react-redux';
import { loginUser } from '../Actions/authActions';
import LoginButton from '../Components/Navbar/LoginButton';

export default connect(null, { loginUser })(LoginButton);
