import React, { createContext, useState, useEffect } from 'react';

import fetchPost from '../services/api/fetchPost';
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

  return (
    <PostContext.Provider value={{ post, loading, resetPosts, addComment }}>{props.children}</PostContext.Provider>
  );
};

export default PostContextProvider;
