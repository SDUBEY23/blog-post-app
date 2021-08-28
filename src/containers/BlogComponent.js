import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogComponent = () => {
  const blogs = useSelector((state) => state.allBlogs.blogs);
  const searchedBlogs = useSelector((state) => state.searchedBlogs.blogs);
  console.log(searchedBlogs);
  console.log(
    blogs.filter((blog) => {
      return blog.title.toLowerCase().includes(searchedBlogs);
    })
  );
  const renderBlogPosts = blogs
    .filter((blog) => {
      if (searchedBlogs === 0) {
        return blog;
      } else if (blog.title.toLowerCase().includes(searchedBlogs)) {
        return blog;
      }
    })
    .map((blog) => {
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
