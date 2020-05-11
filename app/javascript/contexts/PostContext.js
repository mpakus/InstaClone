import React, { createContext, useState, useEffect } from 'react';

import fetchPost from '../services/api/fetchPost';
import likesPost from '../services/api/likesPost';
import createComment from '../services/api/createComment';

export const PostContext = createContext();

const PostContextProvider = (props) => {
  const [state, setState] = useState({ post: null, loading: true, uid: props.uid });
  const { uid, post, loading } = state;

  // preload
  useEffect(() => {
    if (!loading || !uid) return;
    loadPost();
  }, [loading]);

  // --- Post ---
  const loadPost = () => {
    fetchPost(uid).then((data) => {
      setState({ ...state, post: data, loading: false });
    });
  };

  const resetPosts = () => {
    document.location = '/';
  };

  // --- Comment ---
  const addComment = (content) => {
    if (content === '') return;

    createComment(uid, content).then(() => {
      setState({ ...state, loading: true });
    });
  };

  // --- Likes ---
  const likePost = (uid) => {
    likesPost(uid).then((data) => {
      post.likesCount = data.count;
      setState({ ...state, post });
    });
  };

  return (
    <PostContext.Provider value={{ post, loading, resetPosts, addComment, likePost }}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
