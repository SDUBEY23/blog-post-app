import { ActionTypes } from "../constants/action-types";

const initialState = {
  blogs: [],
};
export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_BLOGS:
      return { ...state, blogs: action.payload };

    default:
      return state;
  }
};

export const selectedBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_BLOG:
      return { ...state, ...action.payload };
    case ActionTypes.REMOVE_SELECTED_BLOG:
      return {};

    default:
      return state;
  }
};
