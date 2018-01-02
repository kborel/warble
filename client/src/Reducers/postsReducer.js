import { POST_SUBMITTED, FETCH_POSTS_SUCCESS } from '../Actions/postActions';

export default function posts(state = {}, action) {
  const newState = {};
  switch (action.type) {
    case POST_SUBMITTED:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
        },
      };
    case FETCH_POSTS_SUCCESS:
      action.payload.forEach(post => Object.assign(newState, {
        [post.id]: {
          ...post,
        },
      }));
      return newState;
    default:
      return state;
  }
}

export const getPosts = state => Object.values(state.posts);
