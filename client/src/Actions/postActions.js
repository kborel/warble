import axios from 'axios';
import config from '../config.json';

export const POST_SUBMITTED = 'POST_SUBMITTED';

export const submitPost = text =>
  async (dispatch) => {
    try {
      const { data } = await axios.post(`${config.apiRoot}/posts`, {
        text,
      });
      dispatch({
        type: POST_SUBMITTED,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
