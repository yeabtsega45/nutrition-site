import React from "react";
import "./Home.css";
import img1 from "./assets/fruit.jpg";
import Post from "./Post";

function Home() {
  return (
    <div className="home">
      <img src={img1} alt="fruit" />
      <h1>Home</h1>
      <div className="posts">
        <Post
          image="<img src={img1} />"
          title="use of papaya"
          description="this worked"
        />
        <Post
          image=""
          title="advantage of excercise"
          description="this worked"
        />
        <Post image="" title="covid protocols" description="this worked" />
        <Post
          image=""
          title="cancer preventive foods"
          description="this worked"
        />
        <Post image="" title="alchol disadvantage" description="this worked" />
        <Post image="" title="vitamin B" description="this worked" />
      </div>
    </div>
  );
}

export default Home;
