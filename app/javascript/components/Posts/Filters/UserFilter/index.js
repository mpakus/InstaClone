import React from 'react';

export default function UserFilter({ user, uid, onChange }) {
  return (
    <select onChange={onChange} className="form-control" defaultValue={user}>
      <option value={null}>Public</option>
      <option value={uid}>My Feed</option>
    </select>
  );
}
