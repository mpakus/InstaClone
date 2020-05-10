import React from 'react';

import './index.scss';

const Post = ({ uid, content, image }) => {
  return (
    <div className="card post-card">
      <img src={image} alt={uid} className="img-fluid rounded-top card-img-top" />

      <div className="card-body">
        <cite>{content}</cite>
      </div>

      <div className="card-footer text-muted">
        <div className="row">
          <div className="col">
            <span className="oi oi-heart"></span> <span>Likes</span>
          </div>
          <div className="col text-right">
            <span className="oi oi-comment-square"></span> <span>Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
