// components/Login.js
import React, { useState, useContext } from 'react';

import { AuthContext } from '../context/AuthContext';
import { unstable_HistoryRouter } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const history = unstable_HistoryRouter

  const handleLogin = () => {
    // Implementasi autentikasi login di sini
    login();
    history.push('/');
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
