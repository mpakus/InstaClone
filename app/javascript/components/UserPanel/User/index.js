import React, { useContext, useState } from 'react';

import './index.scss';

import createPost from 'services/api/createPost';
import { AuthContext } from 'contexts/AuthContext';
import ImageInput from './ImageInput';
import TextInput from './TextInput';
import { PostsContext } from '../../../contexts/PostsContext';

const defaultState = { content: '', image: null, creating: false, imageKey: 'imageFile1' };

const User = () => {
  const { currentUser } = useContext(AuthContext);
  const [state, setState] = useState(defaultState);

  const { image, content, creating, imageKey } = state;

  const { resetPosts } = useContext(PostsContext);

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!(image && content)) {
      return;
    }

    setState({ ...state, creating: true });

    createPost(image, content).then(() => {
      setState({ ...defaultState, imageKey: `imageFile${new Date()}` });

      resetPosts();
    });
  };

  const onImageChange = (e) => {
    setState({ ...state, image: e.target.files[0] });
  };

  const onTextChange = (e) => {
    setState({ ...state, content: e.target.value });
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
          <ImageInput onChange={onImageChange} imageKey={imageKey} />
          <TextInput onChange={onTextChange} content={content} creating={creating} />
          <button type="submit" className="btn btn-danger col-12 submit-button" disabled={creating}>
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
