import React, { useState } from 'react';
import './Login.css';

const studentInfo = {
  fullName: 'Sherwin M. Bernardo',
  section: 'BSCS-3A',
  username: 'Sherwin',
  password: '2003',
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === studentInfo.username && password === studentInfo.password) {
      setMessage('Login successful!');
      setIsLoggedIn(true); 
    } else {
      setMessage('Invalid username or password');
      setIsLoggedIn(false); 
    }
  };


  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername(''); 
    setPassword(''); 
    setMessage('You have logged out successfully.');
  };

  return (
    <div className="base">
      <div className="container">
        <h1 className="Login">{isLoggedIn ? 'Welcome' : 'Login'}</h1>
        <form onSubmit={handleSubmit}>
          {}
          {!isLoggedIn && (
            <>
              <div className="forUsername">
                <label className="username" htmlFor="username"><b>Username:</b></label>
                <input
                  className="forInputusername"
                  type="text"
                  id="username"
                  placeholder="Enter your Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="forPassword">
                <label className="password" htmlFor="password"><b>Password:</b></label>
                <input
                  className="forInputpass"
                  id="password"
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          {}
          {isLoggedIn && (
            <div className="studentInfo">
              
              <p><strong>Full Name:</strong> {studentInfo.fullName}</p>
              <p><strong>Section:</strong> {studentInfo.section}</p>
            </div>
          )}

          <div className="button1">
            {}
            {!isLoggedIn ? (
              <button className="Login" type="submit"><b>Login</b></button>
            ) : (
              <button className="Logout" type="button" onClick={handleLogout}><b>Logout</b></button>
            )}
           
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
