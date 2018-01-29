import axios from 'axios';
import Cookies from 'universal-cookie';
import config from '../config.json';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

const cookies = new Cookies();

export const loginUser = (username, password) => async (dispatch) => {
  try {
    const { headers } = await axios.post(`${config.apiRoot}/`, {
      username,
      password,
    });
    await cookies.set('token', headers.authorization, { path: '/' });
    dispatch({ type: LOGIN_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
      payload: error.response.data,
    });
  }
};
