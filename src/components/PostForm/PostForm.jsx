import React, { useState } from "react";
import "./newPost.css";
import { Button, Typography } from "@mui/material";

const NewPost = () => {
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");

  const handleOnImgChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="newPost">
      {" "}
      <form className="newPostForm" onSubmit={handleOnSubmit}>
        <Typography variant="h3">New memories</Typography>

        {image && <img src={image} alt="postImages" />}

        <input type="file" accept="image/*" onChange={handleOnImgChange} />
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={desc}
          placeholder="Description"
          onChange={(e) => setDesc(e.target.value)}
        />
        <Button type="submit">Post</Button>
      </form>
    </div>
  );
};

export default NewPost;
