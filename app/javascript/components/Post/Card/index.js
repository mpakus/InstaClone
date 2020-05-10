import React, { useContext } from 'react';

import { PostContext } from '../../../contexts/PostContext';

const Card = () => {
  const { post } = useContext(PostContext);

  const {
    image,
    uid,
    content,
    user: { name }
  } = post;

  return (
    <div className="card post-card">
      <img src={image} alt={uid} className="img-fluid rounded-top card-img-top" />

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
            <span className="oi oi-comment-square"></span> <span>Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
