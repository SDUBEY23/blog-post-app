import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogComponent = () => {
  const blogs = useSelector((state) => state.allBlogs.blogs);
  const renderBlogPosts = blogs.map((blog) => {
    const { id, title, body } = blog;
    return (
      <div className="four column wide" key={id}>
        <Link to={`/blog/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image"></div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta">{body}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderBlogPosts}</>;
};

export default BlogComponent;
