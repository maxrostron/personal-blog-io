/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ReactQuill from "react-quill";
import axios from "axios";

function CommentCreator({ article }) {
  const [commentValue, setCommentValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  function handleNameChange(e) {
    e.preventDefault();
    setNameValue(e.target.value);
  }

  function handleEmailChange(e) {
    e.preventDefault();
    setEmailValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/blog/submitcomment`, {
        blog: `${article._id}`,
        author: `${nameValue}`,
        email: `${emailValue}`,
        comment: `${commentValue}`,
      })
      .then((response) => {
        console.log("response here");
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <h4 className="blog__comment-form-header">Share your thoughts:</h4>
      <form onSubmit={handleSubmit} className="blog__comment-form">
        <label>
          Name:
          <input
            type="text"
            value={nameValue}
            onChange={handleNameChange}
            required
          />
        </label>
        <label>
          Email :
          <input
            type="email"
            value={emailValue}
            onChange={handleEmailChange}
            required
          />
        </label>
        <ReactQuill
          theme="snow"
          value={commentValue}
          onChange={setCommentValue}
          modules={CommentCreator.modules}
          formats={CommentCreator.formats}
          placeholder={CommentCreator.placeholder.placeholder}
        />
        <input
          type="submit"
          value="Post your comment"
          className="blog__post-comment-button"
        />
      </form>
    </>
  );
}

CommentCreator.modules = {
  toolbar: [["bold", "italic"]],
  clipboard: {
    matchVisual: false,
  },
};

CommentCreator.formats = ["bold", "italic"];

CommentCreator.placeholder = {
  placeholder: "Write your comment",
};

export default CommentCreator;
