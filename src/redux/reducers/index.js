import { combineReducers } from "redux";
import { blogReducer, setInput, selectedBlogReducer } from "./blogReducer";

const reducers = combineReducers({
  allBlogs: blogReducer,
  blog: selectedBlogReducer,
  searchedBlogs: setInput,
});

export default reducers;
