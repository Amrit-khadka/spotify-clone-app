import React from 'react'
import { accessUrl } from './spotify';
import './Login.css';
function Login() {
  return (
    <div className="login">

       {/** Spotify Logo */}
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify-logo"/>

      {/** Login with Spotify button */}
      <a href= {accessUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login
