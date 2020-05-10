import React from 'react';

import './index.scss';

const Comment = (props) => {
  const {
    date,
    content,
    user: { name }
  } = props;

  return (
    <div className="row">
      <div className="col">
        <strong className="card-title">{name}</strong>&nbsp;{date}
        <blockquote>{content}</blockquote>
        <hr />
      </div>
    </div>
  );
};

export default Comment;
