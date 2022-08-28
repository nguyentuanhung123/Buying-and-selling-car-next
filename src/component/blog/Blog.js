import React from "react";
import Back from "../common/back/Back";
import BlogCard from "./BlogCard";

import "./Blog.css";

const Blog = () => {
  return (
    <>
      <Back title="Blog Posts" />
      <div className="blog padding">
        <div className="container grid2">
          <BlogCard />
        </div>
      </div>
    </>
  );
};

export default Blog;
