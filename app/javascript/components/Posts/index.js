import React, { useContext } from 'react';

import Post from './Post';
import { PostsContext } from '../../contexts/PostsContext';
import Spinner from '../Spinner';
import LoadMore from './LoadMore';

const Posts = () => {
  const { posts, loading, haveMore, loadNextPosts, likePost } = useContext(PostsContext);

  const postsList = posts.map((post, index) => {
    return <Post {...post} key={post.uid} index={index} likePost={likePost} />;
  });

  return (
    <div className="col-lg-8">
      {loading && <Spinner />}
      <div className="card-columns post-card-columns">{postsList}</div>
      {haveMore && !loading && <LoadMore onClick={loadNextPosts} />}
    </div>
  );
};

export default Posts;
