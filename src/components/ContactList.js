import React from 'react';
import { map } from 'lodash';

import useContactListVM from '../viewmodels/useContactListVM';
import ProfileCard from './ProfileCard';

const ContactList = (props) => {
  const {contacts, title} = useContactListVM(props);

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {map(contacts, (item) => (
          <li key={item.key}>
            <ProfileCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
