import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Feed = () => {
  const context = useContext(AuthContext);

  return (
    <div className="col-lg-8">
      <h1>Feed</h1>
      Token valid: {context.token.isValid ? 'YES' : 'NO'}
    </div>
  );
};

export default Feed;
