import React from 'react';

import './index.scss';

export default function TextInput({ onChange, content, creating }) {
  return (
    <textarea
      className="form-control col-12 text-input"
      rows="5"
      placeholder="Write your story"
      onChange={onChange}
      value={content || ''}
      disabled={creating}
    />
  );
}
