import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedBlog, removeSelectedBlog } from "../redux/actions/blogActions";
import "./blogDetail.css";

const BlogDetail = () => {
  const blog = useSelector((state) => state.blog);
  const { id, title, body } = blog;
  const { blogId } = useParams();
  const dispatch = useDispatch();
  console.log(blog);

  const fetchBlogDetail = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(selectedBlog(response.data));
  };

  useEffect(() => {
    if (blogId && blogId !== "") fetchBlogDetail();
    return () => {
      dispatch(removeSelectedBlog());
    };
  }, [blogId]);
  return (
    <div className="detail">
      {Object.keys(blog).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="detail__content">
          <div className="detail__header">
            <h1>{title}</h1>
          </div>
          <div className="detail__context">
            <p>{body}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
