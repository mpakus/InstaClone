import React from 'react';
import ReactDOM from 'react-dom';

import Posts from '../components/Posts';
import UserPanel from '../components/UserPanel';
import AuthContextProvider from '../contexts/AuthContext';
import PostsContextProvider, { PostsContext } from '../contexts/PostsContext';
import Layout from '../containers/Layout';

const PostsApp = ({ token }) => {
  return (
    <Layout>
      <PostsContextProvider>
        <AuthContextProvider token={token}>
          <Posts />
          <UserPanel defaultContext={PostsContext} />
        </AuthContextProvider>
      </PostsContextProvider>
    </Layout>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('App');
  const token = appContainer.getAttribute('data-token');

  ReactDOM.render(<PostsApp token={token} />, appContainer);
});
