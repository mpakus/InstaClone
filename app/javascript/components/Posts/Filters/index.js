import React, { useContext } from 'react';

import './index.scss';

import { AuthContext } from '../../../contexts/AuthContext';
import { PostsContext } from '../../../contexts/PostsContext';
import UserFilter from './UserFilter';
import LikesFilter from './LikesFilter';
import CommentsFilter from './CommentsFilter';

const Filters = () => {
  const { isGuest, currentUser } = useContext(AuthContext);
  const { user, changeUserFilter, likesFilter, changeLikesFilter, commentsFilter, changeCommentsFilter } = useContext(
    PostsContext
  );

  const onChangeUserFilter = (e) => {
    changeUserFilter(e.target.value);
  };

  const onChangeLikesFilter = (e) => {
    changeLikesFilter(e.target.value);
  };

  const onChangeCommentsFilter = (e) => {
    changeCommentsFilter(e.target.value);
  };

  return (
    <div className="filters-panel shadow">
      <div className="row">
        <div className="col">
          {!isGuest() && <UserFilter user={user} uid={currentUser.uid} onChange={onChangeUserFilter} />}
        </div>
        <div className="col">
          <LikesFilter likesFilter={likesFilter} onChange={onChangeLikesFilter} />
        </div>
        <div className="col">
          <CommentsFilter commentsFilter={commentsFilter} onChange={onChangeCommentsFilter} />
        </div>
      </div>
    </div>
  );
};

export default Filters;
