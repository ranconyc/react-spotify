import React, { useEffect, useState } from 'react';
import Login from './Login';
import './App.css';
import { getTokenFromUrl } from './spotify';

const App = () => {
  const [token, setToken] = useState(null);
  
    useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash = '';
      const _token = hash.access_token;

      if (_token) {
        setToken(_token);
      }
      console.log(token);
    }, [])

    return (
      <div className="App">
      {
        token ? (
        <h1>You Logged in</h1>
      ) : (
        <Login />
      )
      }
    </div>
  );
}

export default App;
