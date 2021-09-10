import React, { useState } from "react";
import ReactQuill from "react-quill";

function CommentCreator() {
  const [value, setValue] = useState("");

  return (
    <>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={CommentCreator.modules}
        formats={CommentCreator.formats}
        placeholder={CommentCreator.placeholder.placeholder}
      />
      <button className="blog__post-comment-button">Post your comment</button>
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
  placeholder: "Post a comment",
};

export default CommentCreator;
