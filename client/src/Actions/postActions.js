import axios from 'axios';
import config from '../config.json';

export const SUBMIT_POST = 'SEND_POST';

export const submitPost = post =>
  async (dispatch) => {
    try {
      const { data } = await axios.post(`${config.apiRoot}/posts`, {
        post,
      });
      dispatch({
        type: SUBMIT_POST,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
