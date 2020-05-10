import React, { useContext } from 'react';

import { PostContext } from '../../contexts/PostContext';
import Spinner from '../Spinner';
import Card from './Card';

const Post = () => {
  const { post, loading } = useContext(PostContext);

  return (
    <div className="col-lg-8">
      {loading && <Spinner />}
      {post && <Card />}
    </div>
  );
};

export default Post;
