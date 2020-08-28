import React, { useState,useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  // const[token, setToken] = useState(null);
  const[{token }, dispatch] = useDataLayerValue();
  //Run code based on given condition
  useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash = ""; // security reason, clear token key
      const _token = hash.access_token;

      if (_token) {

        dispatch({
          type: "SET_TOKEN",
          token: _token,
        });
        
        // setToken(_token);
        spotify.setAccessToken(_token);
        spotify.getMe().then((user) => {
          dispatch({
            type: "SET_USER",
            user
          });         
        });

        spotify.getUserPlaylists().then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });
        });

        spotify.getPlaylist('37i9dQZF1E34T2RB9VFTDq').then(response => {
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
        })

      }
      console.log('I have a token', token);
  }, [token,dispatch])
  // console.log("user", user);
  // console.log("token....", token)
  return (
    <div className="app">

      { token ? <Player spotify = { spotify } /> : <Login /> }  

    </div>
  );
}

export default App;


