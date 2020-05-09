import React, { useContext, useState, useCallback } from 'react';

import './index.scss';

import createPost from 'services/api/createPost';
import { AuthContext } from 'contexts/AuthContext';

const defaultState = { content: '', image: null };

const User = () => {
  const { currentUser } = useContext(AuthContext);
  const [state, setState] = useState(defaultState);

  const { image, content } = state;

  const onFormSubmit = (e) => {
    createPost(image, content).then((data) => {
      console.log(data);
      useCallback(() => setState({ ...defaultState }), []);
    });

    e.preventDefault();
    return false;
  };

  return (
    <div className="profile-sidebar">
      <div className="profile-userpic text-center">
        <img src={currentUser.avatar} className="img-responsive" alt="{currentUser.name}" />
      </div>

      <h3 className="profile-usertitle text-center">
        <div className="profile-usertitle-name">{currentUser.name}</div>
      </h3>

      <div className="profile-usermenu">
        <form onSubmit={onFormSubmit}>
          <input type="file" onChange={(e) => setState({ ...state, image: e.target.files[0] })} accept="image/*" />
          <textarea
            className="form-control col-12"
            rows="5"
            onChange={(e) => setState({ ...state, content: e.target.value })}
            defaultValue={content}
          />
          <button type="submit" className="btn btn-dark col-12">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
