import React from 'react';
import PropTypes from 'prop-types';

import FriendsListDiv, { FriendDiv } from '../styles/FriendsListStyles';

const FriendsList = ({ friends, onDeleteFriend }) => (
  <FriendsListDiv>
    {friends.map(({
      id, name, age, email,
    }) => (
      <FriendDiv key={id}>
        <div>
          <h1>{name}<span> {id}</span></h1>
          <p>age: {age}</p>
          <p>email: {email}</p>
        </div>
        <div>
          <button onClick={() => onDeleteFriend(id)} type="button">
            ✕
          </button>
        </div>
      </FriendDiv>
    ))}
  </FriendsListDiv>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ),
  onDeleteFriend: PropTypes.func.isRequired,
};

FriendsList.defaultProps = {
  friends: [],
};

export default FriendsList;
