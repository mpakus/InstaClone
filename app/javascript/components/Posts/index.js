import React, { useContext } from 'react';

import Post from './Post';
import { PostsContext } from '../../contexts/PostsContext';
import Spinner from './Spinner';
import LoadMore from './LoadMore';

const Posts = () => {
  const { posts, loading, haveMore, loadNextPosts } = useContext(PostsContext);

  const postsList = posts.map((post) => {
    return <Post {...post} key={post.uid} />;
  });

  return (
    <div className="col-lg-8">
      {loading && <Spinner />}
      {postsList}
      {haveMore && !loading && <LoadMore onClick={loadNextPosts} />}
    </div>
  );
};

export default Posts;
