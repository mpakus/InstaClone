import React from 'react';

export default function CommentsFilter({ commentsFilter, onChange }) {
  return (
    <select onChange={onChange} className="form-control" defaultValue={commentsFilter}>
      <option value="">Comments</option>
      <option value="desc">⬆ Up</option>
      <option value="asc">⬇ Down</option>
    </select>
  );
}
