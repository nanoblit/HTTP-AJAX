import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import GlobalStyles from './styles/GlobalStyles';
import AppDiv from './styles/AppStyles';

import FriendForm from './components/FriendForm';
import FriendsList from './components/FriendsList';

function App() {
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState('');
  const [spinner, setSpinner] = useState('');
  const [idValue, setIdValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [ageValue, setAgeValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const friendsUrl = 'http://localhost:5000/friends';

  const getFriends = async () => {
    setSpinner('Loading friends...');
    try {
      const response = await axios.get(friendsUrl);
      setFriends(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setSpinner('');
    }
  };

  const postFriend = async () => {
    const newFriend = {
      name: nameValue,
      age: ageValue,
      email: emailValue,
    };

    try {
      await axios.post(friendsUrl, newFriend);
      getFriends();
    } catch (err) {
      console.log(err.message);
    }
  };

  const updateFriend = async () => {
    const updatedFriend = {
      name: nameValue,
      age: ageValue,
      email: emailValue,
    };

    try {
      await axios.put(`${friendsUrl}/${idValue}`, updatedFriend);
      getFriends();
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteFriend = async id => {
    try {
      await axios.delete(`${friendsUrl}/${id}`);
      getFriends();
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getFriends();
  }, []);

  const onSubmitFriendForm = e => {
    e.preventDefault();
    postFriend();
    setNameValue('');
    setAgeValue('');
    setEmailValue('');
  };

  const onUpdateFriend = () => {
    updateFriend();
    setIdValue('');
    setNameValue('');
    setAgeValue('');
    setEmailValue('');
  };

  const onDeleteFriend = id => {
    deleteFriend(id);
  };

  const onChangeId = e => {
    setIdValue(e.target.value);
  };

  const onChangeName = e => {
    setNameValue(e.target.value);
  };

  const onChangeAge = e => {
    setAgeValue(e.target.value);
  };

  const onChangeEmail = e => {
    setEmailValue(e.target.value);
  };

  return (
    <AppDiv className="App">
      <GlobalStyles />
      <nav>
        <Link to="/friend_form">Add friend</Link>
        <Link to="/friends">Friends</Link>
      </nav>
      <Route path="/" exact render={() => <h1>All your friends in one place!</h1>} />
      <Route
        path="/friend_form"
        render={props => (
          <FriendForm
            {...props}
            onSubmitFriendForm={onSubmitFriendForm}
            onUpdateFriend={onUpdateFriend}
            onChangeId={onChangeId}
            onChangeName={onChangeName}
            onChangeAge={onChangeAge}
            onChangeEmail={onChangeEmail}
            idValue={idValue}
            nameValue={nameValue}
            ageValue={ageValue}
            emailValue={emailValue}
          />
        )}
      />
      <Route
        path="/friends"
        render={props => (
          <div>
            {error && <div>{error}</div>}
            {spinner && <div>{spinner}</div>}
            <FriendsList {...props} friends={friends} onDeleteFriend={onDeleteFriend} />
          </div>
        )}
      />
    </AppDiv>
  );
}

export default App;
