import React, { useContext } from 'react';

import './index.scss';
import { PostContext } from '../../../contexts/PostContext';
import { AuthContext } from '../../../contexts/AuthContext';
import CommentForm from '../CommentForm';
import LoginSignup from '../LoginSignup';
import Comment from '../Comment';
import Spinner from '../../Spinner';

const Card = () => {
  const { loading, post, addComment } = useContext(PostContext);
  const { isGuest } = useContext(AuthContext);

  const {
    image,
    uid,
    content,
    user: { name },
    comments,
    commentsCount
  } = post;

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

      {commentsList}

      {isGuest() ? <LoginSignup /> : (loading && <Spinner />) || <CommentForm addComment={addComment} />}
    </div>
  );
};

export default Card;
