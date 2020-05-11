import React from 'react';

import './index.scss';

const Post = (props) => {
  const {
    uid,
    content,
    image,
    commentsCount,
    likesCount,
    index,
    likePost,
    user: { name }
  } = props;

  const onLikesClick = (e) => {
    e.preventDefault();

    likePost(index);
  };

  return (
    <div className="col-sm-6 d-flex">
      <div className="card post-card shadow-sm flex-fill">
        <a href={`/posts/${uid}`}>
          <img src={image} alt={uid} className="img-fluid rounded-top card-img-top" />
        </a>

        <div className="card-body">
          <cite>{content}</cite>
        </div>

        <div className="card-footer text-muted">
          <div className="row">
            <div className="col">
              <a href="#" className="badge badge-danger badge-likes" onClick={onLikesClick}>
                <span className="oi oi-heart"></span>
                &nbsp;
                <span>{likesCount}</span>
              </a>
              <div>{name}</div>
            </div>
            <div className="col text-right">
              <span className="badge badge-primar">
                <span className="oi oi-comment-square"></span> <span>{commentsCount}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
