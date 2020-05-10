import React, { createContext, useState, useEffect } from 'react';
import fetchPosts from '../services/api/fetchPosts';

export const PostsContext = createContext();

const INITIAL_STATE = {
  posts: [],
  page: 1,
  haveMore: true,
  loading: true
};

const PostsContextProvider = (props) => {
  const [state, setState] = useState(INITIAL_STATE);
  const { page, haveMore, posts, loading } = state;

  // preload
  useEffect(() => {
    if (!loading) return;

    page === 1 ? reloadPosts() : loadPosts();
  }, [loading]);

  const loadPosts = () => {
    fetchPosts(page).then((data) => {
      setState({ ...state, posts: posts.concat(data), loading: false });
    });
  };

  const reloadPosts = () => {
    fetchPosts(0).then((data) => {
      setState({ ...state, page: 1, posts: data, loading: false });
    });
  };

  const resetPosts = () => {
    setState({ ...state, page: 1, loading: true });
  };

  const loadNextPosts = () => {
    setState({ ...state, page: page + 1, loading: true });
  };

  return (
    <PostsContext.Provider value={{ posts, loading, haveMore, resetPosts, loadNextPosts }}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
