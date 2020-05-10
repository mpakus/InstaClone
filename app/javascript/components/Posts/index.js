import React, { useContext } from 'react';

import Post from './Post';
import { PostsContext } from '../../contexts/PostsContext';
import Spinner from './Spinner';

const Posts = () => {
  const { posts, loading } = useContext(PostsContext);

  const postsList = posts.map((post) => {
    return <Post {...post} key={post.uid} />;
  });

  return (
    <div className="col-lg-8">
      {loading && <Spinner />}
      {postsList}
    </div>
  );
};

export default Posts;
