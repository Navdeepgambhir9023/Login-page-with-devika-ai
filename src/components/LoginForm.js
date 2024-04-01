import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Implement authentication logic here
      // For example, using an API or third-party authentication service
      const isAuthenticated = await authenticateUser(username, password);

      if (isAuthenticated) {
        // Redirect to the desired page after successful login
        navigate('/dashboard');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('An error occurred during login. Please try again later.');
    }
  };

  const authenticateUser = async (username, password) => {
    // Implement your authentication logic here
    // For example, make an API call to verify the credentials
    return username === 'admin' && password === 'password';
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div>{error}</div>}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
