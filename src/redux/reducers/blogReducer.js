import { ActionTypes } from "../constants/action-types";

const initialState = {
  blogs: [
    {
      id: 1,
      title: "Swapnil",
      body: "programmer",
    },
  ],
};
export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_BLOGS:
      return state;

    default:
      return state;
  }
};
