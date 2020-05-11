import React, { useContext } from 'react';

import Post from './Post';
import { PostsContext } from '../../contexts/PostsContext';
import Spinner from '../Spinner';
import LoadMore from './LoadMore';
import Filters from './Filters';

const Posts = () => {
  const { posts, loading, haveMore, loadNextPosts, likePost } = useContext(PostsContext);

  const PostsList = () => {
    const postList = posts.map((post, index) => {
      return <Post {...post} key={post.uid} index={index} likePost={likePost} />;
    });

    return <div className="row">{postList}</div>;
  };

  return (
    <div className="col-lg-8">
      <Filters />
      {loading && <Spinner />}
      <PostsList />
      {haveMore && !loading && <LoadMore onClick={loadNextPosts} />}
    </div>
  );
};

export default Posts;
