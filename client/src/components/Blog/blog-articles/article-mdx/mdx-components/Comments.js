/* eslint-disable react/prop-types */
import React, { Fragment, useState, useEffect } from "react";
import Upvote from "../../../../../utils/Upvote";
import parse from "html-react-parser";
import { formatDistance } from "date-fns";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { config } from "../../../../../Constants";

function Comments({ article }) {
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    article.comments.forEach((comment) => {
      fetch(`${config.url.API_URL}/api/blog/comment/${comment}`)
        .then(function (res) {
          return res.json();
        })
        .then((data) => {
          setCommentData((oldArray) => [...oldArray, data]);
        });
    });

    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader
          type="Rings"
          color="#000000aa"
          height={60}
          width={60}
          timeout={10000}
        />
      ) : (
        commentData
          .sort((a, b) => b.postedAt - a.postedAt)
          .map((comment, index) => {
            return <Comment key={index} comment={comment} />;
          })
      )}
    </>
  );
}

function Comment({ comment }) {
  const [hide, setHide] = useState(false);
  const postedAt = formatDistance(new Date(comment.postedAt), Date.now(), {
    addSuffix: true,
  });
  return (
    <div className="blog__comment">
      <div className="blog__comment-collapse" onClick={() => setHide(!hide)}>
        {hide ? "+" : "-"}
      </div>
      <div className="blog__comment-main">
        <div>
          <h1 className="blog__comment-author">{comment.author}</h1>
          <p className="blog__comment-timestamp">{postedAt}</p>
        </div>
        {hide ? null : (
          <>
            <span className="blog__comment-content">{parse(comment.body)}</span>
            <div className="blog__comment-socials">
              <Upvote comment={comment} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Comments;
