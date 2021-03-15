import "./Post.css";

import PropTypes from "prop-types";
import React from "react";

const post = (props) => (
  <article className="Post">
    <h1>{props.title}</h1>
    <div className="Info">
      <div className="Author">{props.author}</div>
    </div>
  </article>
);

post.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

export default post;
