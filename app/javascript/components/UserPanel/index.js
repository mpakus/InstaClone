import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Guest from './Guest';
import User from './User';

const UserPanel = () => {
  const { isGuest } = useContext(AuthContext);

  return (
    <div className="col-lg-4">
      <div className="sticky-top">{isGuest() ? <Guest /> : <User />}</div>
    </div>
  );
};

export default UserPanel;
