import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import FriendForm from './components/FriendForm';
import FriendsList from './components/FriendsList';

function App() {
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState('');
  const [spinner, setSpinner] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [ageValue, setAgeValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const getFriends = async () => {
    setSpinner('Loading friends...');
    try {
      const response = await axios.get('http://localhost:5000/friends');
      setFriends(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setSpinner('');
    }
  };

  useEffect(() => {
    getFriends();
  }, []);

  const onSubmitFriendForm = e => {
    e.preventDefault();
    console.log({ nameValue, ageValue, emailValue });
    setNameValue('');
    setAgeValue('');
    setEmailValue('');
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
    <div className="App">
      <nav>
        <Link to="/friend_form">Add friend</Link>
        <Link to="/friends">Friends</Link>
      </nav>
      <Route path="/" exact render={() => <div>All your friends in one place!</div>} />
      <Route
        path="/friend_form"
        render={props => (
          <FriendForm
            {...props}
            onSubmitFriendForm={onSubmitFriendForm}
            onChangeName={onChangeName}
            onChangeAge={onChangeAge}
            onChangeEmail={onChangeEmail}
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
            <FriendsList {...props} friends={friends} />
          </div>
        )}
      />
    </div>
  );
}

export default App;
