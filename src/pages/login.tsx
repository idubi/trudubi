// src/pages/login.tsx

import React from 'react';
import styled from 'styled-components';
import { signIn } from 'next-auth/react';

const LoginButton = styled.button`
  background-color: #1877f2; /* Facebook Blue */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #165db6;
  }
`;

const LoginPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <LoginButton onClick={() => signIn('facebook')}>Login with Facebook</LoginButton>
    </div>
  );
};

export default LoginPage;
