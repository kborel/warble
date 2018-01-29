import { connect } from 'react-redux';
import Navbar from '../Components/Navbar';
import { getIsAuthenticated } from '../Reducers/authReducer';

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navbar);
