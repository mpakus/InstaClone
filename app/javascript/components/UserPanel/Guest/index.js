import React from 'react';

import './index.scss';

const Guest = () => {
  return (
    <div className="guest-sidebar">
      <h3 className="guest-title text-center">
        <div className="guest-title-hey">Welcome</div>
      </h3>

      <div className="text-white text-center">
        Please <a href="/login">Login</a> or <a href="/signup">Sign up</a>
      </div>
    </div>
  );
};

export default Guest;
