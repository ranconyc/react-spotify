import React, { useEffect } from 'react';
import Login from './Login';
import Player from './Player';
import './App.css';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateProviderValue } from './StateProvider'
const spotify = new SpotifyWebApi();

const App = () => {
  const [{ user, token, playlists, discover_weekly }, dispatch] = useStateProviderValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });
      // set the user
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user 
        })
      });
      // set the playlests
      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      });
      // set playlist
      spotify.getPlaylist('37i9dQZEVXcWwoxbGQGq2U').then( response =>
        dispatch({
          type: 'GET_DISCOVER_WEEKLY',
          discover_weekly: response
        })

      )
    }
    console.log('token >>', token);
  }, [])
    
    console.log('user >>', user);
    console.log('token >>', token);
    console.log('playlists >>', playlists);

    return (
      <div className="App">
      {
        token ? (
        <Player />
      ) : (
        <Login />
      )
      }
    </div>
  );
}

export default App;
