import React, { useState } from 'react';

import './index.scss';

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const onTextChange = (e) => {
    setComment(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addComment(comment);
    setComment('');
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea value={comment} className="form-control col-12 comment-input" rows="5" onChange={onTextChange} />
      <button className="btn btn-primary col-12 btn-add-comment">Add Comment</button>
    </form>
  );
};

export default CommentForm;
