import React from 'react';

import useProfileCardVM from '../viewmodels/useProfileCardVM';

const ProfileCard = (props) => {
  const {email, mailto, name, picture} = useProfileCardVM(props);

  return (
    <div>
      <img src={picture} alt={name}/>
      <div>
        <h1>{name}</h1>
        <div><a href={mailto}>{email}</a></div>
      </div>
    </div>
  );
};

export default ProfileCard;
