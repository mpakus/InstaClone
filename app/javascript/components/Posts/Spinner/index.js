import React from 'react';

import './index.scss';

export default function Spinner() {
  return (
    <div className="row">
      <div className="col text-center spinner">
        <span className="oi oi-aperture "></span>
      </div>
    </div>
  );
}
