import React, { createContext, useState, useEffect } from 'react';

import fetchPosts from '../services/api/fetchPosts';
import likesPost from '../services/api/likesPost';

export const PostsContext = createContext();

const INITIAL_STATE = {
  posts: [],
  page: 1,
  haveMore: true,
  loading: true,
  user: null,
  likesFilter: null,
  commentsFilter: null
};

const PostsContextProvider = (props) => {
  const [state, setState] = useState(INITIAL_STATE);
  const { page, haveMore, posts, loading, user, likesFilter, commentsFilter } = state;

  // preload
  useEffect(() => {
    if (!loading) return;

    page === 1 ? reloadPosts() : loadPosts();
  }, [loading]);

  // --- Posts ---
  const loadPosts = () => {
    fetchPosts(page, user, likesFilter, commentsFilter).then((data) => {
      setState({ ...state, posts: posts.concat(data), loading: false });
    });
  };

  const reloadPosts = () => {
    fetchPosts(0, user, likesFilter, commentsFilter).then((data) => {
      setState({ ...state, page: 1, posts: data, loading: false });
    });
  };

  const resetPosts = () => {
    setState({ ...state, page: 1, loading: true });
  };

  const loadNextPosts = () => {
    setState({ ...state, page: page + 1, loading: true });
  };

  // --- Likes ---
  const likePost = (index) => {
    likesPost(posts[index].uid).then((data) => {
      posts[index].likesCount = data.count;
      setState({ ...state, posts });
    });
  };

  const changeLikesFilter = (likesFilter) => {
    setState({ ...state, loading: true, likesFilter });
  };

  // --- Filters ---
  const changeUserFilter = (user) => {
    setState({ ...state, loading: true, user });
  };

  const changeCommentsFilter = (commentsFilter) => {
    setState({ ...state, loading: true, commentsFilter });
  };

  const sharedContext = {
    posts,
    loading,
    haveMore,
    resetPosts,
    loadNextPosts,
    likePost,
    user,
    changeUserFilter,
    likesFilter,
    changeLikesFilter,
    commentsFilter,
    changeCommentsFilter
  };

  return <PostsContext.Provider value={sharedContext}>{props.children}</PostsContext.Provider>;
};

export default PostsContextProvider;
