// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import Feed from '../components/Feed';
import UserPanel from '../components/UserPanel';
import AuthContextProvider from '../contexts/AuthContext';
// import PropTypes from 'prop-types'

const FeedApp = ({ token }) => {
  return (
    <div className="row">
      <AuthContextProvider token={token}>
        <Feed />
        <UserPanel />
      </AuthContextProvider>
    </div>
  );
};

FeedApp.defaultProps = {
  name: 'David'
};

// App.propTypes = {
//   name: PropTypes.string
// }

document.addEventListener('turbolinks:load', () => {
  const appContainer = document.getElementById('App');
  const token = appContainer.getAttribute('data-token');

  ReactDOM.render(<FeedApp token={token} />, appContainer);
});
