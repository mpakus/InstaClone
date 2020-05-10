import React, { createContext, useState, useEffect } from 'react';

import fetchPost from '../services/api/fetchPost';

export const PostContext = createContext();

const PostContextProvider = (props) => {
  const [state, setState] = useState({ post: null, loading: true, uid: props.uid });
  const { uid, post, loading } = state;

  // preload
  useEffect(() => {
    if (!loading || !uid) return;
    loadPost();
  }, [loading]);

  const loadPost = () => {
    fetchPost(uid).then((data) => {
      setState({ ...state, post: data, loading: false });
    });
  };

  const resetPosts = () => {
    document.location = '/';
  };

  return <PostContext.Provider value={{ post, resetPosts }}>{props.children}</PostContext.Provider>;
};

export default PostContextProvider;
