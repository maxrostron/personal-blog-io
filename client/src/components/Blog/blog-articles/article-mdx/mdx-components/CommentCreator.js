/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import { config } from "../../../../../Constants";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function CommentCreator({ article }) {
  const [commentValue, setCommentValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
    axios
      .post(`${config.url.API_URL}/api/blog/submitcomment`, {
        blog: `${article._id}`,
        author: `${nameValue}`,
        email: `${emailValue}`,
        comment: `${commentValue}`,
      })
      .then((response) => {
        console.log(response);
        setSubmitted(false);
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
        {!submitted ? (
          <input
            type="submit"
            value="Post your comment"
            className="blog__post-comment-button"
          />
        ) : (
          <Loader
            type="Rings"
            color="#000000aa"
            height={60}
            width={60}
            timeout={Infinity}
          />
        )}
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
