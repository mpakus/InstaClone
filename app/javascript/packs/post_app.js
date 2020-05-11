import React from 'react';
import ReactDOM from 'react-dom';

import UserPanel from '../components/UserPanel';
import AuthContextProvider from '../contexts/AuthContext';
import PostContextProvider, { PostContext } from '../contexts/PostContext';
import Layout from '../containers/Layout';
import Post from '../components/Post';

const PostApp = ({ token, uid }) => {
  return (
    <Layout>
      <PostContextProvider uid={uid}>
        <AuthContextProvider token={token}>
          <Post />
          <UserPanel defaultContext={PostContext} />
        </AuthContextProvider>
      </PostContextProvider>
    </Layout>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('App');
  const token = appContainer.getAttribute('data-token');
  const uid = appContainer.getAttribute('data-uid');

  ReactDOM.render(<PostApp token={token} uid={uid} />, appContainer);
});
