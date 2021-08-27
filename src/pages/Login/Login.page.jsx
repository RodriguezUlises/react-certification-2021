import React, { useState } from 'react';
import { useHistory } from 'react-router';
import loginApi from '../../api/login.api';
import { useAuth } from '../../providers/Auth';
import { LoginSection, LoginForm, FormGroup } from './Login.styled';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const authenticate = async (event) => {
    event.preventDefault();
    try{
      const user = await loginApi(username, password);
      login(user);
      history.push('/');
    } catch (err) {
      setError('Username or password incorrect');
    }
  }

  return (
    <LoginSection>
      <h1>Welcome back!</h1>
      <LoginForm onSubmit={authenticate}>
        <FormGroup>
          <label htmlFor="username">
            <strong>username </strong>
            <input 
              required 
              type="text" 
              id="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </label>
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">
            <strong>password </strong>
            <input 
              required 
              type="password" 
              id="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </FormGroup>
        <button type="submit">Login</button>
        <p>{error}</p>
      </LoginForm>
    </LoginSection>
  );
}

export default LoginPage;
