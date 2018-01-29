import { LOGIN_SUCCESS, LOGIN_ERROR } from '../Actions/authActions';

const initialState = {
  isAuthenticated: false,
  error: '',
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        error: '',
        isAuthenticated: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const getIsAuthenticated = ({ auth }) => auth.isAuthenticated;
