import { POST_SUBMITTED } from '../Actions/postActions';

export default function posts(state = {}, action) {
  switch (action.type) {
    case POST_SUBMITTED:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
}
