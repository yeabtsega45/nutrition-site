import React from "react";
import "./Home.css";
import img1 from "./assets/fruit.jpg";
import Post from "./Post";
import img2 from "./assets/vegetables.jpg";
import img3 from "./assets/papaya.jpg";
import img4 from "./assets/covid.jpg";
import img5 from "./assets/alcohol.jpg";
import img6 from "./assets/excercise.jpg";

function Home() {
  return (
    <div className="home">
      <img src={img2} alt="fruit" />
      <h1>Home</h1>
      <div className="posts">
        <Post image={img3} title="use of papaya" description="this worked" />
        <Post
          image={img6}
          title="advantage of excercise"
          description="this worked"
        />
        <Post image={img4} title="covid protocols" description="this worked" />
        <Post
          image={img1}
          title="cancer preventive foods"
          description="this worked"
        />
        <Post
          image={img5}
          title="alchol disadvantage"
          description="this worked"
        />
        <Post image={img1} title="vitamin B" description="this worked" />
      </div>
    </div>
  );
}

export default Home;
