import React from 'react';

export default function LikesFilter({ likesFilter, onChange }) {
  return (
    <select onChange={onChange} className="form-control" defaultValue={likesFilter}>
      <option value="">Likes</option>
      <option value="desc">⬆ Up</option>
      <option value="asc">⬇ Down</option>
    </select>
  );
}
