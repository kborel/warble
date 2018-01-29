import axios from 'axios';
import Cookies from 'universal-cookie';
import config from '../config.json';

const cookies = new Cookies();

export const POST_SUBMITTED = 'POST_SUBMITTED';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export const submitPost = text => async (dispatch) => {
  try {
    const { data } = await axios.post(`${config.apiRoot}/posts`, {
      text,
    }, {
      headers: {
        Authorization: `${cookies.get('token')}`,
      },
    });
    dispatch({
      type: POST_SUBMITTED,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchPosts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${config.apiRoot}/posts`, {
      headers: {
        Authorization: `${cookies.get('token')}`,
      },
    });
    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

