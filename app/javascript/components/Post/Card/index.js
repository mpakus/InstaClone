import React, { useContext } from 'react';

import './index.scss';
import { PostContext } from '../../../contexts/PostContext';
import { AuthContext } from '../../../contexts/AuthContext';
import CommentForm from '../CommentForm';
import LoginSignup from '../LoginSignup';
import Comment from '../Comment';
import Spinner from '../../Spinner';

const Card = () => {
  const { loading, post, addComment, likePost } = useContext(PostContext);
  const { isGuest } = useContext(AuthContext);

  const {
    image,
    uid,
    content,
    user: { name },
    comments,
    likesCount,
    commentsCount
  } = post;

  const onLikesClick = (e) => {
    e.preventDefault();

    likePost(uid);
  };

  const commentsList = comments.map((comment) => {
    return <Comment {...comment} key={comment.uid} />;
  });

  return (
    <div>
      <div className="card post-card">
        <img src={image} alt={uid} className="img-fluid rounded-top card-img-top" />

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
              <span>{name}</span>
            </div>
            <div className="col text-right">
              <span className="oi oi-comment-square"></span> <span>{commentsCount}</span>
              <span> comment(s)</span>
            </div>
          </div>
        </div>
      </div>

      {commentsList}

      {isGuest() ? <LoginSignup /> : (loading && <Spinner />) || <CommentForm addComment={addComment} />}
    </div>
  );
};

export default Card;
