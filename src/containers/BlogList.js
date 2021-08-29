import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setBlogs } from "../redux/actions/blogActions";
import BlogComponent from "./BlogComponent";
import "./blogList.css";
import Header from "./Header";

const BlogList = () => {
  const blogs = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchBlogPosts = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setBlogs(response.data));
  };
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  console.log("Blogs:", blogs);
  return (
    <div className="blogList">
      <Header />
      <BlogComponent />
    </div>
  );
};

export default BlogList;
