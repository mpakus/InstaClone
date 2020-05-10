import React from 'react';

const LoadMore = ({ onClick }) => {
  return (
    <button className="btn btn-outline-primary col-12" onClick={onClick}>
      Load More...
    </button>
  );
};

export default LoadMore;
