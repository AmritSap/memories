import { Typography } from "@mui/material";
import React from "react";
import Post from "../Post/Post";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeLeft">
        <Typography
          variant="h6"
          fontWeight={500}
          color="rgba(0,0,0,0.582)"
          style={{ textAlign: "center" }}
        >
          All Post
        </Typography>
        <Post />
      </div>
      {/* <div className="homeleft">
    {posts && posts.length > 0 && 
      posts.map((item) => (
        <Post
          key={item._id}
          postId={item._id}
          caption={item.caption}
          postImages={item.image.url}
          likes={item.likes}
          comments={item.comments}
          ownerImages={item.owner.avatar.url}
          ownerName={item.owner.name}
          ownerId={item.owner._id}
        />
      ))
    
  
      </div> */}

      <div className="homeRight">
        <Typography
          variant="h6"
          fontWeight={500}
          color="rgba(0,0,0,0.582)"
          style={{ textAlign: "center" }}
        >
          Recent Post
        </Typography>
      </div>
    </div>
  );
};

export default Home;
