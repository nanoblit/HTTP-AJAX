import React from 'react';
import PropTypes from 'prop-types';

const FriendForm = ({
  onSubmitFriendForm,
  onUpdateFriend,
  onChangeId,
  onChangeName,
  onChangeAge,
  onChangeEmail,
  idValue,
  nameValue,
  ageValue,
  emailValue,
}) => (
  <form onSubmit={onSubmitFriendForm}>
    <input onChange={onChangeId} value={idValue} placeholder="ID (if changing friend)" required />
    <input onChange={onChangeName} value={nameValue} placeholder="Name" required />
    <input onChange={onChangeAge} value={ageValue} placeholder="Age" required />
    <input onChange={onChangeEmail} value={emailValue} placeholder="Email" required />
    <button type="submit">Add Friend</button>
    <button onClick={onUpdateFriend} type="button">
      Change Friend
    </button>
  </form>
);

FriendForm.propTypes = {
  onSubmitFriendForm: PropTypes.func.isRequired,
  onUpdateFriend: PropTypes.func.isRequired,
  onChangeId: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeAge: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  idValue: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  ageValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
};

export default FriendForm;
