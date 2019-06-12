import React from 'react';
import PropTypes from 'prop-types';

const FriendsList = ({ friends }) => (
  <div>
    {friends.map(({
      id, name, age, email,
    }) => (
      <div key={id}>
        <h1>{name}</h1>
        <p>age: {age}</p>
        <p>email: {email}</p>
      </div>
    ))}
  </div>
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
};

FriendsList.defaultProps = {
  friends: [],
};

export default FriendsList;
