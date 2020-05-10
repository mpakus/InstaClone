import React from 'react';

import './index.scss';

export default function ImageInput({ onChange, imageKey }) {
  return (
    <div>
      <input
        id="imageInput"
        type="file"
        onChange={onChange}
        accept="image/*"
        key={imageKey}
        className="custom-file-input"
      />
      <label className="btn btn-warning col-12 label-input" htmlFor="imageInput">
        <span className="oi oi-image"></span> <span>Image</span>
      </label>
    </div>
  );
}
