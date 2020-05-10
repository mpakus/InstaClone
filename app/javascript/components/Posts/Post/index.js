import React from 'react';

import './index.scss';

const Post = ({ commentsCount, uid, content, image, user: { name } }) => {
  return (
    <div className="card post-card">
      <a href={`/posts/${uid}`}>
        <img src={image} alt={uid} className="img-fluid rounded-top card-img-top" />
      </a>

      <div className="card-body">
        <cite>{content}</cite>
      </div>

      <div className="card-footer text-muted">
        <div className="row">
          <div className="col">{name}</div>
          <div className="col text-right">
            <span className="oi oi-heart"></span> <span>Likes</span>
          </div>
          <div className="col text-right">
            <span className="oi oi-comment-square"></span> <span>{commentsCount}</span>
            <span> comment(s)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
