import React from 'react';
import './App.css';

function App() {
  return (
    <div className="facebook-clone">
      <div className="container">
        <div className="left">
          <h1 className="facebook-logo">facebook</h1>
          <p className="facebook-tagline">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="right">
          <div className="login-form">
            <form action="https://web.facebook.com/" method="GET">
              <input type="text" placeholder="Email or Phone Number" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="login-button">Log In</button>
            </form>
            <a href="/" className="forgot-password">Forgotten password?</a>
            <hr />
            <button className="create-account-button">Create New Account</button>
          </div>
          <p className="create-page">
            <a href="/">Create a Page</a> for a celebrity, brand, or business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
