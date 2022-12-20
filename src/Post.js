import React from "react";
import "./Post.css";

function Post({ image, title, description }) {
  return (
    <div className="post">
      <img src="" alt="images" />
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Post;
