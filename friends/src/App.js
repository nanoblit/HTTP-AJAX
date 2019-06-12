import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FriendsList from './components/FriendsList';

function App() {
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState('');
  const [spinner, setSpinner] = useState('');

  const getFriends = async () => {
    setSpinner('Loading friends');
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
  return (
    <div className="App">
      {error && <div>{error}</div>}
      {spinner && <div>{spinner}</div>}
      <FriendsList friends={friends} />
    </div>
  );
}

export default App;
